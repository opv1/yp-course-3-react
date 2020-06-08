import React from 'react';
import classes from './CardList.module.scss';
import Card from '../Card/Card';

export default class CardList extends React.Component {
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
