import Loader from '../Loader/Loader';

const Card = (props) => {
  const { card } = props;
  const handleCardURL = (e) => {
    const url = e.innerText;
    window.open(url, '_blank');
  };
  return card ? (
    <div className="profile__cards">
      <h1 className="card__title">{card && card.title}</h1>
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
      </div>
    </div>
  ) : (
    <Loader />
  );
};

export default Card;
