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
