import React from 'react';
import { signInWithGoogle } from '../services/firebase';
import { useAuth } from '../hooks/useAuth';

// Login page: allows users to sign in with Google
const Login = () => {
  const { user } = useAuth();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      {user ? (
        <p className="text-lg">Logged in as {user.displayName}</p>
      ) : (
        <>
          <h2 className="text-2xl font-bold mb-4">Login to your account</h2>
          <button
            onClick={signInWithGoogle}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Sign in with Google
          </button>
        </>
      )}
    </div>
  );
};

export default Login;
