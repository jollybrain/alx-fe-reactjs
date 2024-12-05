import React from 'react';
import useAuth from '../hooks/useAuth';

function Login() {
  const { toggleAuth } = useAuth();

  const handleLogin = () => {
    toggleAuth();  // Simulate logging in by toggling authentication status
  };

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
