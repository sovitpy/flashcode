import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import axios from 'axios';
import { useEffect, useState } from 'react';

ChartJS.register(ArcElement, Tooltip, Legend);

const UserCard = (props) => {
  const { user, userLogo } = props;
  const { setShowSolved, setShowReview, setShowUnsolved } = props;
  const [total, setTotal] = useState(120);

  useEffect(() => {
    axios.get('/api/v1/cards/total').then((res) => {
      setTotal(res.data.data);
    });
  }, []);

  const data = {
    labels: ['Solved Cards', 'Unsolved Cards', 'Review Cards'],
    datasets: [
      {
        data: [
          user.solvedCards.length,
          user.unsolvedCards.length,
          user.reviewCards.length,
        ],
        backgroundColor: ['#3aba80', '#f44a47', '#3795ff'],
        hoverBackgroundColor: ['#3aba80', '#f44a47', '#3795ff'],
        borderWidth: 1,
        text: '25%',
      },
    ],
  };
  const options1 = {
    padding: '0px',
    responsive: false,
    maintainAspectRatio: false,
    defaultFontSize: '14px',
    plugins: {
      legend: {
        display: false,
        position: 'top',
        labels: {
          boxWidth: 10,
          font: {
            size: 10,
            color: '#fff',
          },
        },
        tooltip: {
          enabled: false,
        },
      },
    },
  };

  const handleView = (e) => {
    if (e === 'solved') {
      setShowSolved(true);
    } else if (e === 'review') {
      setShowReview(true);
    } else if (e === 'unsolved') {
      setShowUnsolved(true);
    }
  };

  return (
    <div className="user-form__container">
      <div className="userform__box">
        <p className="form__heading">USER PROFILE</p>

        <div className="userform">
          {/* <div className="user__logo">
            <img src={userLogo} alt="user_logo"></img>
          </div> */}
          <Doughnut
            data={data}
            width={150}
            height={150}
            options={options1}
            className="profile__chart"
          />
          <div className="info">
            <ul className="infolist">
              <li className="value">{user && user.username}</li>
              <li className="key">Cards Solved</li>
              <li className="value">
                <span className="card__stats">
                  {user.solvedCards && user.solvedCards.length}{' '}
                  <button
                    className="show__cards"
                    onClick={() => handleView('solved')}
                  >
                    [Show]
                  </button>
                </span>
              </li>
              <li className="key">Cards to Review</li>
              <li className="value">
                <span className="card__stats">
                  {user.reviewCards && user.reviewCards.length}{' '}
                  <button
                    className="show__cards"
                    onClick={() => handleView('review')}
                  >
                    [Show]
                  </button>
                </span>
              </li>
              <li className="key">Cards Unsolved</li>
              <li className="value">
                <span className="card__stats">
                  {user.unsolvedCards && user.unsolvedCards.length}{' '}
                  <button
                    className="show__cards"
                    onClick={() => handleView('unsolved')}
                  >
                    [Show]
                  </button>
                </span>
              </li>
              <li className="key">Cards Explored</li>
              <li className="value">
                {user.solvedCards.length +
                  user.reviewCards.length +
                  user.unsolvedCards.length}
                {' / '}
                {total}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
