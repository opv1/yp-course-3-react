import React, { useState, useEffect, useContext } from 'react';
import classes from './Card.module.scss';
import Axios from '../../scripts/Axios/Axios';
import Context from '../../context/Context/Context';
import Button from '../../components/UI/Button/Button';

function Card({ myId, children }) {
  const [state, setState] = useState({
    showDeleteIcon: false,
    activateLike: false,
    likeCounter: null,
  });

  useEffect(() => {
    if (children.owner._id === myId) {
      setState((prevState) => ({ ...prevState, showDeleteIcon: true }));
    }

    children.likes.forEach((like) => {
      if (like._id === myId) {
        setState((prevState) => ({ ...prevState, activateLike: true }));
      }
    });

    setState((prevState) => ({
      ...prevState,
      likeCounter: children.likes.length,
    }));
    // eslint-disable-next-line
  }, []);

  const handleLike = (event) => {
    const card = event.target.closest('.Card_Card__1-aIe').getAttribute('data');
    const likeIcon = event.target.closest('.Button_LikeIcon__2q2NK');

    if (likeIcon.classList.contains('Button_ActiveLikeIcon__1dC21')) {
      Axios.delete(`/cards/like/${card}`)
        .then(() =>
          setState((prevState) => ({
            ...prevState,
            activateLike: false,
            likeCounter: prevState.likeCounter - 1,
          }))
        )
        .catch((error) => console.log(error));
    } else {
      Axios.put(`/cards/like/${card}`)
        .then(() =>
          setState((prevState) => ({
            ...prevState,
            activateLike: true,
            likeCounter: prevState.likeCounter + 1,
          }))
        )
        .catch((error) => console.log(error));
    }
  };

  const { handleShowModal, handleRemoveCard } = useContext(Context);

  const backgroundImage = {
    backgroundImage: `url('${children.link}')`,
  };

  return (
    <div className={classes.Card} data={children._id}>
      <div
        onClick={handleShowModal}
        className={classes.Image}
        style={backgroundImage}
      >
        <Button
          onClick={(event) => handleRemoveCard(event, children._id)}
          type={'DeleteIcon'}
          showDeleteIcon={state.showDeleteIcon}
        />
      </div>
      <div className={classes.Description}>
        <h3 className={classes.Name}>{children.name}</h3>
        <div className={classes.Like}>
          <Button
            onClick={(event) => handleLike(event)}
            type={'LikeIcon'}
            activateLike={state.activateLike}
          />
          <span className={classes.LikeCounter}>{state.likeCounter}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
