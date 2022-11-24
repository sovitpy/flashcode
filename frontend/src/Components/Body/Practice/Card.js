import Loader from '../Loader/Loader';

const Card = (props) => {
  const { card } = props;
  const { handleCardURL, handleSubmit } = props;
  return card && card.title ? (
    <div className="user-form__container">
      <div className="card__box">
        <p className="form__heading">PRACTICE</p>

        <div className="userform">
          <h1 className="card__title">
            {card && card.title} {card && card.type}
          </h1>
          <div className="info">
            <ul className="infolist">
              <li className="card_key">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
                  alt="LeetCode"
                  className="logo"
                />
              </li>
              <li className="url" onClick={(e) => handleCardURL(e.target)}>
                {card && `${card.url}`}
              </li>
              <li className="card_key">Difficulty</li>
              <li
                className={
                  card.difficulty
                    ? `difficulty difficulty__${card.difficulty}`
                    : 'difficulty'
                }
              >
                {card && card.difficulty}
              </li>
              <li className="card_key">Data Structure</li>
              <li className="card_value">{card && card.ds}</li>
            </ul>
            <div className="card__actions">
              <button
                className="solve-button"
                onClick={(e) => handleSubmit(e, card)}
              >
                Solved
              </button>
              <button
                className="unsolve-button"
                onClick={(e) => handleSubmit(e, card)}
              >
                Unsolved
              </button>
              <button
                className="review-button"
                onClick={(e) => handleSubmit(e, card)}
              >
                Review
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Loader />
  );
};

export default Card;
