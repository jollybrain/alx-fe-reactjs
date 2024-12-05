function ProtectedRoute({ children }) {
    const isAuthenticated = false; // Simulate authentication status
    
    if (!isAuthenticated) {
      return <Navigate to="/login" />;
    }
  
    return children;
  }
  