import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../firebaseConfig';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('currentUser')) || null);
  const [userRole, setUserRole] = useState(localStorage.getItem('userRole') || null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isUnsubscribed = false;

    const unsubscribe = auth.onAuthStateChanged(user => {
      if (!isUnsubscribed) {
        setCurrentUser(user);
        if (user) {
          localStorage.setItem('currentUser', JSON.stringify(user));
        } else {
          localStorage.removeItem('currentUser');
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
    <AuthContext.Provider value={{ currentUser, userRole, setUserRole: setSecureUserRole, loading, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
