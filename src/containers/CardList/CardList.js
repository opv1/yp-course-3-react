import React, { Component } from 'react';
import classes from './CardList.module.scss';
import Card from '../Card/Card';

class CardList extends Component {
  render() {
    const {
      myId,
      initialCards,
      handleShowModal,
      handleRemoveCard,
    } = this.props;

    return (
      <div className={classes.CardList}>
        {initialCards.map((card) => {
          return (
            <Card
              key={card._id}
              myId={myId}
              handleShowModal={handleShowModal}
              handleRemoveCard={(event) => handleRemoveCard(event, card._id)}
            >
              {card}
            </Card>
          );
        })}
      </div>
    );
  }
}

export default CardList;
