import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // For navigation links
import { signInWithPopup, signOut, getAuth, GoogleAuthProvider } from 'firebase/auth'; // Firebase auth functions
import firebaseApp from '../firebaseConfig'; // Firebase configuration (we'll set this up later)

const Navbar = () => {
  // Firebase auth instance
  const auth = getAuth(firebaseApp);
  
  // State for user authentication
  const [user, setUser] = useState(null);

  // Effect hook to check if user is logged in
  useEffect(() => {
    auth.onAuthStateChanged(setUser); // Set the user when auth state changes
  }, [auth]);

  // Google Sign-In function
  const handleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // Successfully signed in
        console.log(result.user);
      })
      .catch((error) => {
        // Handle errors
        console.error(error.message);
      });
  };

  // Sign out function
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Signed out successfully
        console.log('Signed out');
      })
      .catch((error) => {
        // Handle errors
        console.error(error.message);
      });
  };

  return (
    <nav className="bg-blue-600 p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-xl font-bold">
          FlickFind
        </Link>

        <div className="flex space-x-4">
          <Link to="/" className="text-white hover:text-gray-300">Home</Link>
          <Link to="/search" className="text-white hover:text-gray-300">Search</Link>
          <Link to="/favorites" className="text-white hover:text-gray-300">Favorites</Link>

          {/* Conditionally render login/logout */}
          {!user ? (
            <button 
              onClick={handleSignIn} 
              className="text-white bg-blue-500 px-4 py-2 rounded hover:bg-blue-400">
              Login with Google
            </button>
          ) : (
            <button 
              onClick={handleSignOut} 
              className="text-white bg-red-500 px-4 py-2 rounded hover:bg-red-400">
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
