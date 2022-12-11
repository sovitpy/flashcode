import Card from './Card';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Loader from '../Loader/Loader';

const Practice = () => {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [reload, setReload] = useState(false);
  const [card, setCard] = useState(undefined);
  const [user, setUser] = useState({});

  axios.defaults.headers.common[
    'Authorization'
  ] = `Bearer ${localStorage.getItem('token')}`;

  useEffect(() => {
    axios.get('/api/v1/users/profile').then((res) => {
      setUser(res.data);
    });
  }, []);

  const getNewCard = () => {
    axios
      .get('/api/v1/cards/random')
      .then((res) => {
        if (res.data.status === 'warning') {
          setError(res.data.message);
          if (user.reviewCards.length) {
            let randomCard =
              user.reviewCards[
                Math.floor(Math.random() * user.reviewCards.length)
              ];
            randomCard = { ...randomCard, type: '(Reviewing)' };
            setCard(randomCard);
          } else if (user.unsolvedCards.length) {
            let randomCard =
              user.unsolvedCards[
                Math.floor(Math.random() * user.unsolvedCards.length)
              ];
            randomCard = { ...randomCard, type: '(Unsolved)' };
            setCard(randomCard);
          } else if (user.solvedCards.length) {
            let randomCard =
              user.solvedCards[
                Math.floor(Math.random() * user.solvedCards.length)
              ];
            randomCard = { ...randomCard, type: '(Solved)' };
            setCard(randomCard);
          }
        } else {
          setCard({ ...res.data.data, type: '(New Card!)' });
        }
      })
      .catch((err) => {
        setError(err);
      });
  };

  useEffect(() => {
    const solved = user.solvedCards || [];
    const unsolved = user.unsolvedCards || [];
    const review = user.reviewCards || [];
    const unsolvedWeight = 0.5;
    const reviewWeight = 0.3;
    const solvedWeight = 0.2;
    const totalWeight = solvedWeight + unsolvedWeight + reviewWeight;
    const random = Math.random() * totalWeight;
    if (unsolved.length > 0 && random > unsolvedWeight) {
      let randomCard = unsolved[Math.floor(Math.random() * unsolved.length)];
      randomCard = { ...randomCard, type: '(Unsolved)' };
      setCard(randomCard);
    } else if (review.length > 0 && random > reviewWeight) {
      let randomCard = review[Math.floor(Math.random() * review.length)];
      randomCard = { ...randomCard, type: '(Review)' };
      setCard(randomCard);
    } else if (solved.length > 0 && random > solvedWeight) {
      let randomCard = solved[Math.floor(Math.random() * solved.length)];
      randomCard = { ...randomCard, type: '(Solved)' };
      setCard(randomCard);
    } else {
      getNewCard();
    }
  }, [user, reload]);

  const handleCardURL = (target) => {
    window.open(target.innerText);
  };

  const handleSubmit = (e, card) => {
    if (e.target.innerText === 'Solved') {
      axios
        .post(`/api/v1/users/cards/${card._id}`, {
          cardType: 'solved',
        })
        .then((res) => {
          if (res.status.toString().startsWith('2')) {
            setError('');
            setSuccess(res.data.message);
            setReload(!reload);
          } else {
            setSuccess('');
            setError(res.data.message);
          }
        })
        .catch((err) => {
          console.log(err);
          setError(err.response.data.message);
        });
    } else if (e.target.innerText === 'Unsolved') {
      axios
        .post(`/api/v1/users/cards/${card._id}`, {
          cardType: 'unsolved',
        })
        .then((res) => {
          if (res.status.toString().startsWith('2')) {
            setError('');
            setSuccess(res.data.message);
            setReload(!reload);
          } else {
            setSuccess('');
            setError(res.data.message);
          }
        })
        .catch((err) => {
          console.log(err);
          setError(err.response.data.message);
        });
    } else if (e.target.innerText === 'Review') {
      axios
        .post(`/api/v1/users/cards/${card._id}`, {
          cardType: 'review',
        })
        .then((res) => {
          if (res.status.toString().startsWith('2')) {
            setError('');
            setSuccess(res.data.message);
            setReload(!reload);
          } else {
            setSuccess('');
            setError(res.data.message);
          }
        })
        .catch((err) => {
          console.log(err);
          setError(err.response.data.message);
        });
    }
    axios.get('/api/v1/users/profile').then((res) => {
      setUser(res.data);
    });
  };

  return card ? (
    <>
      <Card
        card={card}
        handleCardURL={handleCardURL}
        handleSubmit={handleSubmit}
      />
    </>
  ) : (
    <Loader />
  );
};

export default Practice;
