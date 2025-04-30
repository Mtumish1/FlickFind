import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

// Custom hook to access the AuthContext more easily
export const useAuth = () => {
  return useContext(AuthContext);
};
