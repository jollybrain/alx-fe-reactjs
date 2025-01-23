import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: '#333',
        display: 'flex',
        justifyContent: 'space-around',
        padding: '10px'
      }}
    >
      <Link
        to="/"
        style={{
          color: '#fff',
          textDecoration: 'none',
          fontSize: '18px'
        }}
      >
        Home
      </Link>
      <Link
        to="/about"
        style={{
          color: '#fff',
          textDecoration: 'none',
          fontSize: '18px'
        }}
      >
        About
      </Link>
      <Link
        to="/services"
        style={{
          color: '#fff',
          textDecoration: 'none',
          fontSize: '18px'
        }}
      >
        Services
      </Link>
      <Link
        to="/contact"
        style={{
          color: '#fff',
          textDecoration: 'none',
          fontSize: '18px'
        }}
      >
        Contact
      </Link>
    </nav>
  );
}

export default Navbar;
