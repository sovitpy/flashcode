const UserCard = (props) => {
  const { user, userLogo } = props;
  return (
    <div className="user-form__container">
      <div className="userform__box">
        <p className="form__heading">USER PROFILE</p>

        <div className="userform">
          <img src={userLogo} alt="user_logo" className="user__logo"></img>
          <div className="info">
            <ul className="infolist">
              <li className="key">Username</li>
              <li className="value">{user && user.username}</li>
              <li className="key">Solved Cards</li>
              <li className="value">
                {user.solvedCards && user.solvedCards.length}
              </li>
              <li className="key">Review Cards</li>
              <li className="value">
                {user.reviewCards && user.reviewCards.length}
              </li>
              <li className="key">Unsolved Cards</li>
              <li className="value">
                {user.unsolvedCards && user.unsolvedCards.length}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
