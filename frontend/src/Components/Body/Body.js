import Login from './Login/Login';
import Signup from './Signup/Signup';
import Home from './Home/Home';
import { Route, Routes } from 'react-router-dom';
import './body.css';
import { useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';
import Protected from './Protected';

const Body = () => {
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
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<Home />} />
      <Route
        path="/profile"
        element={
          <Protected isLoggedIn={isLoggedIn}>
            <Home />
          </Protected>
        }
      />
    </Routes>
  );
};

export default Body;
