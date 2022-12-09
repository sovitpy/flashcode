import Login from './Login/Login';
import Signup from './Signup/Signup';
import Home from './Home/Home';
import { Route, Routes, Navigate } from 'react-router-dom';
import './body.css';
import { useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';
import Protected from './Protected';
import Logout from './Logout';
import Profile from './Profile/Profile';
import Practice from './Practice/Practice';
import CardLibrary from './Profile/CardLibrary';

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
      {/* <Route path="/login" element={!isLoggedIn ? <Login /> : <Home />} /> */}
      <Route path="/" element={<Home />} />
      <Route
        exact
        path="/login"
        element={isLoggedIn ? <Navigate replace to={'/'} /> : <Login />}
      />
      <Route
        path="/signup"
        element={isLoggedIn ? <Navigate replace to={'/'} /> : <Signup />}
      />
      <Route
        path="/profile"
        element={
          <Protected isLoggedIn={isLoggedIn}>
            <Profile />
          </Protected>
        }
      />
      <Route
        path="/practice"
        element={
          <Protected isLoggedIn={isLoggedIn}>
            <Practice />
          </Protected>
        }
      />
      <Route path="/logout" element={<Logout />} />
      <Route
        path="*"
        element={
          <h1
            style={{
              height: '400px',
              width: '800px',
              lineHeight: '400px',
              textAlign: 'center',
              margin: 'auto',
              color: 'white',
            }}
          >
            404 Not Found
          </h1>
        }
      />
    </Routes>
  );
};

export default Body;
