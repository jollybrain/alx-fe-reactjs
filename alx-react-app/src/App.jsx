
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

// Header Component
function Header() {
    return (
      <header>
        <h1>My Favorite Cities</h1>
      </header>
    );
  }
  
  // Main Content Component
  function MainContent() {
    return (
      <main>
        <p>I love to visit New York, Paris, and Tokyo.</p>
      </main>
    );
  }
  
  // Footer Component
  function Footer() {
    return (
      <footer>
        <p>© 2023 City Lovers</p>
      </footer>
    );
  }
  
  // Main App Component
  function App() {
    return (
      <div>
        <Header />
        <MainContent />
        <Footer />
      </div>
    );
  }
  
  

export default App;
