import { useState, useEffect } from 'react';
import jwt_decode from 'jwt-decode';
import axios from 'axios';
import userLogo from '../../../images/user_icon_alt.png';
import UserCard from './UserCard';
import Loader from '../Loader/Loader';
import CardLibrary from './CardLibrary';
const Profile = () => {
  axios.defaults.headers.common[
    'Authorization'
  ] = `Bearer ${localStorage.getItem('token')}`;

  const [user, setUser] = useState({});
  const [showSolved, setShowSolved] = useState(false);
  const [showReview, setShowReview] = useState(false);
  const [showUnsolved, setShowUnsolved] = useState(false);

  useEffect(() => {
    axios.get('/api/v1/users/profile').then((res) => {
      setUser(res.data);
    });
  }, []);

  return user.username ? (
    <div className="user__profile__container">
      {!showSolved && !showReview && !showUnsolved && (
        <UserCard
          user={user}
          userLogo={userLogo}
          setShowSolved={setShowSolved}
          setShowReview={setShowReview}
          setShowUnsolved={setShowUnsolved}
        />
      )}
      {showSolved && (
        <CardLibrary
          cards={user.solvedCards}
          title={'Solved Cards'}
          setShowSolved={setShowSolved}
          setShowReview={setShowReview}
          setShowUnsolved={setShowUnsolved}
        />
      )}
      {showReview && (
        <CardLibrary
          cards={user.reviewCards}
          title={'Review Cards'}
          setShowSolved={setShowSolved}
          setShowReview={setShowReview}
          setShowUnsolved={setShowUnsolved}
        />
      )}
      {showUnsolved && (
        <CardLibrary
          cards={user.unsolvedCards}
          title={'Unsolved Cards'}
          setShowSolved={setShowSolved}
          setShowReview={setShowReview}
          setShowUnsolved={setShowUnsolved}
        />
      )}
    </div>
  ) : (
    <Loader />
  );
};

export default Profile;
