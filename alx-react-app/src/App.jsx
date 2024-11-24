import React from 'react';
import WelcomeMessage from './components/WelcomeMessage';
import Header from './components/header';
import MainContent from './components/maincontent';
import Footer from './components/footer';
import UserProfile from './components/UserProfile';
import Counter from './components/Counter';
import index from './index';

// Main App Component
function App() {
  return (
    <div className="App">
      {/* Welcome Message */}
      <WelcomeMessage />

      {/* Header */}
      <Header />

      {/* Main Content */}
      <MainContent />

      {/* Footer */}
      <Footer />

      {/* User Profile */}
      <div>
        <h2>User Profiles</h2>
        <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
        <UserProfile name="Bob" age="30" bio="Enjoys reading and cycling" />
      </div>

      {/* Counter Component */}
      <div>
        <h1 style={{ textAlign: 'center', color: 'navy' }}>React Counter Application</h1>
        <Counter />
      </div>
    </div>
  );
}

export default App;
