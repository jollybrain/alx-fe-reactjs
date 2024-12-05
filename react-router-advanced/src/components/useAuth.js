import { useState } from 'react';

function useAuth() {
  // Simulate an authentication status (replace with actual logic)
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // For demonstration purposes, let's toggle authentication status
  const toggleAuth = () => {
    setIsAuthenticated((prevStatus) => !prevStatus);
  };

  return {
    isAuthenticated,
    toggleAuth,
  };
}

export default useAuth;
