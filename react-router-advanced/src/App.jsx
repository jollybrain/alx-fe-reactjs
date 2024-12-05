import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate, useParams } from 'react-router-dom';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/blog/1">Blog Post 1</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        } />
        <Route path="/profile/details" element={<ProfileDetails />} />
        <Route path="/profile/settings" element={<ProfileSettings />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

function ProtectedRoute({ children }) {
  const isAuthenticated = false;
  
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  
  return children;
}

function Home() {
  return <h2>Home Page</h2>;
}

function Profile() {
  return (
    <div>
      <h2>Profile Page</h2>
      <nav>
        <ul>
          <li><Link to="details">Profile Details</Link></li>
          <li><Link to="settings">Profile Settings</Link></li>
        </ul>
      </nav>
    </div>
  );
}

function ProfileDetails() {
  return <h3>Profile Details</h3>;
}

function ProfileSettings() {
  return <h3>Profile Settings</h3>;
}

function BlogPost() {
  const { id } = useParams();
  return <h2>Blog Post {id}</h2>;
}

function Login() {
  return <h2>Login Page</h2>;
}

export default App;
