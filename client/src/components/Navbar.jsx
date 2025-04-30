// components/Navbar.jsx

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';
import { auth, provider } from '../services/firebase'; // centralized import

const Navbar = () => {
  // User state for auth
  const [user, setUser] = useState(null);

  // Watch for auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, setUser);
    return () => unsubscribe(); // cleanup on unmount
  }, []);

  // Handle login
  const handleSignIn = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error('Login error:', error.message);
    }
  };

  // Handle logout
  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Logout error:', error.message);
    }
  };

  return (
    <nav className="bg-blue-600 p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-xl font-bold">FlickFind</Link>

        <div className="flex space-x-4">
          <Link to="/" className="text-white hover:text-gray-300">Home</Link>
          <Link to="/search" className="text-white hover:text-gray-300">Search</Link>
          <Link to="/favorites" className="text-white hover:text-gray-300">Favorites</Link>

          {!user ? (
            <button
              onClick={handleSignIn}
              className="text-white bg-blue-500 px-4 py-2 rounded hover:bg-blue-400"
            >
              Login with Google
            </button>
          ) : (
            <button
              onClick={handleSignOut}
              className="text-white bg-red-500 px-4 py-2 rounded hover:bg-red-400"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
