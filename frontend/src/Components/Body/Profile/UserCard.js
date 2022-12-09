import CardLibrary from './CardLibrary';

const UserCard = (props) => {
  const { user, userLogo } = props;
  const { setShowSolved, setShowReview, setShowUnsolved } = props;
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
          <div className="user__logo">
            <img src={userLogo} alt="user_logo"></img>
          </div>
          <div className="info">
            <ul className="infolist">
              <li className="key">Username</li>
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
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
