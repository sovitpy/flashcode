import { useState, useEffect } from 'react';
import jwt_decode from 'jwt-decode';
import axios from 'axios';
import userLogo from '../../../images/user_icon_alt.png';
import UserCard from './UserCard';
import Loader from '../Loader/Loader';
const Profile = () => {
  axios.defaults.headers.common[
    'Authorization'
  ] = `Bearer ${localStorage.getItem('token')}`;

  const [user, setUser] = useState({});

  useEffect(() => {
    axios.get('http://localhost:3001/api/v1/users/profile').then((res) => {
      setUser(res.data);
    });
  }, []);

  return user.username ? (
    <UserCard user={user} userLogo={userLogo} />
  ) : (
    <Loader />
  );
};

export default Profile;
