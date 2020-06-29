import React from 'react';
import classes from './CardList.module.scss';
import Card from '../Card/Card';

function CardList({ initialCards, myId }) {
  return (
    <div className={classes.CardList}>
      {initialCards.map((card) => {
        return (
          <Card key={card._id} myId={myId}>
            {card}
          </Card>
        );
      })}
    </div>
  );
}

export default CardList;
