import { Component } from 'react';
import WelcomeMessage from './components/WelcomeMessage'
import Header from './components/header';
import MainContent from './components/maincontent';
import Footer from './components/footer';

class App extends Component {
    render() {
        return (
            <div className='App'>
                <WelcomeMessage />
            </div>
        );
    }
    
}

class App extends Component() {
    
    render() {
        return (
            <div className='App'>
                <Header />
                <MainContent />
                <Footer />
            </div>
        );
    }

}    

export default App;
