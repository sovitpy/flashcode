import Card from './Card';
import Loader from '../Loader/Loader';
import { Grid } from '@mui/material';
import backButton from '../../../images/back.svg';
import { Fragment } from 'react';

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
        spacing={{ xs: 0, sm: 3, md: 4 }}
        columns={{ xs: 4, sm: 12, md: 12 }}
      >
        {cards.map((card) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={card._id}>
            <Card card={card} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default CardLibrary;
