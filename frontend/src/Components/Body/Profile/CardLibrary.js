import Card from './Card';
import Loader from '../Loader/Loader';
import { Grid } from '@mui/material';
import backButton from '../../../images/back.svg';

const CardLibrary = ({
  cards,
  title,
  setShowSolved,
  setShowUnsolved,
  setShowReview,
}) => {
  const handleBack = () => {
    setShowSolved(false);
    setShowUnsolved(false);
    setShowReview(false);
  };

  return (
    <div className="card__library">
      <div className="card__library__header">
        <button className="back__button" onClick={handleBack}>
          ←
        </button>
        <h1 className="card__library__title">{title}</h1>
      </div>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </Grid>
    </div>
  );
};

export default CardLibrary;
