import React, { createContext, useContext, useEffect, useState } from 'react';
import {auth} from '../firebaseConfig';
import Cookies from 'js-cookie'; 

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [userRole, setUserRole] = useState(null);
  const [loading, setLoading] = useState(true);

  const setSecureUserRole = (role) => {
    Cookies.set('userRole', role, { secure: true, sameSite: 'strict' });
  };

  // Function to get the user's role from the secure cookie
  const getSecureUserRole = () => {
    return Cookies.get('userRole');
  };
  
  useEffect(() => {
    let isUnsubscribed = false;

    const unsubscribe = auth.onAuthStateChanged(user => {
      if (!isUnsubscribed) {
        setCurrentUser(user);
        setLoading(false);
      }
    });
    const storedUserRole = getSecureUserRole();
    if (storedUserRole) {
      setUserRole(storedUserRole);
    }

    // Cleanup function
    return () => {
      isUnsubscribed = true;
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, userRole, setUserRole: (role) => { setUserRole(role); setSecureUserRole(role); }, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
