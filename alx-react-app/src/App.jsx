import { Component } from 'react';
import WelcomeMessage from './components/WelcomeMessage'
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';

class App extends Component {
    render() {
        return (
            <div className='App'>
                <WelcomeMessage />
            </div>
        );
    }
    
}



// Header.jsx
import React from'react';

const Header = () => {
    return (
        <header>
            <h1>Welcome to My Website</h1>
        </header>
    );
}


// MainContent.jsx
import React from'react';

const MainContent = () => {
    return (
        <main>
            <p>This is the main content of the website.</p>
        </main>
    );
}


// Footer.jsx
import React from 'react';

const Footer = () => {
    return (
        <footer>
            <p>�� 2023 My Website. All rights reserved.</p>
        </footer>
    );
}

export default App;