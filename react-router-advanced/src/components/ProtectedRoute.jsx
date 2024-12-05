import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';  // Import the useAuth hook

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();  // Use the hook to get the auth status

  if (!isAuthenticated) {
    // If not authenticated, redirect to login page
    return <Navigate to="/login" />;
  }

  return children;  // If authenticated, render the protected content
}

export default ProtectedRoute;
