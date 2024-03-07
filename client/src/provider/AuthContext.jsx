import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../firebaseConfig';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('currentUser')) || null);
  const [userRole, setUserRole] = useState(localStorage.getItem('userRole') || null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isUnsubscribed = false;

    const unsubscribe = auth.onAuthStateChanged(async user => {
        if (!isUnsubscribed) {
            setCurrentUser(user);
            if (user) {
                localStorage.setItem('currentUser', JSON.stringify(user));
                // Fetch the role only if necessary (e.g., not already in local storage or context)
                if (!localStorage.getItem('userRole')) {
                    try {
                        const userRole = await fetchUserRole(user);
                        setUserRole(userRole); // Set the user's role in your state
                        localStorage.setItem('userRole', userRole); // Save the role to local storage
                    } catch (error) {
                        console.error('Error fetching user role:', error);
                        // Handle any errors, such as by logging out the user or showing an error message
                    }
                } else {
                    // If the role is already in local storage, use that
                    setUserRole(localStorage.getItem('userRole'));
                    localStorage.setItem('userRole', userRole); 
                }
            } else {
                // User is not signed in or session expired
                localStorage.removeItem('currentUser');
                localStorage.removeItem('userRole');
                setCurrentUser(null);
                setUserRole(null);
            }
            setLoading(false);
        }
    });

    return () => {
        isUnsubscribed = true;
        unsubscribe();
    };
}, []);

  const setSecureUserRole = (role) => {
    setUserRole(role);
    localStorage.setItem('userRole', role);
  };

  const logout = () => {
    auth.signOut();
    localStorage.removeItem('currentUser');
    localStorage.removeItem('userRole');
    setCurrentUser(null);
    setUserRole(null);
  };

  return (
    <AuthContext.Provider value={{ currentUser, userRole, setSecureUserRole, loading, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);


async function fetchUserRole(user) {
  const idToken = await user.getIdToken(true); 
  const response = await fetch('http://localhost:8080/api/verifyToken', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({ idToken }),
  });

  if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  if (data.success && data.user && data.user.role) {
      return data.user.role; 
  } else {
      throw new Error('Failed to fetch user role');
  }
}
