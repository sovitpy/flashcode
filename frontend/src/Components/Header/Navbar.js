import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/flashcode_logo.png';
import jwt_decode from 'jwt-decode';
import './navbar.css';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (
      localStorage.token &&
      jwt_decode(localStorage.token).exp * 1000 > Date.now()
    ) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  return (
    <nav>
      <div className="navbar">
        <img src={logo} alt="Flashcode Logo" />
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/practice">
            <li>Practice</li>
          </Link>
          <Link to={isLoggedIn ? '/logout' : '/login'}>
            <li>{isLoggedIn ? 'Logout' : 'Login'}</li>
          </Link>
          <Link to="/profile">
            <li>My Profile</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
