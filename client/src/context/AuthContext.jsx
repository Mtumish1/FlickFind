// Save user state (logged in or not)
//Expose login(), logout(), and user via useContext


import React, { createContext, useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../services/firebase';

// Create a context to store authenticated user info
export const AuthContext = createContext();

// AuthProvider to wrap the app and provide user state globally
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Listen for Firebase auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe(); // cleanup listener on unmount
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>
      {children}
    </AuthContext.Provider>
  );
};
