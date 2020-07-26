import React, { useState, useEffect, useContext } from 'react';
import classes from './Card.module.scss';
import { axiosData } from '../../scripts/axios/axios';
import Button from '../../components/UI/Button/Button';
import { AppContext } from '../../context/app/AppContext';

function Card({ children }) {
  const [state, setState] = useState({
    showDeleteIcon: false,
    activateLike: false,
    likeCounter: null,
  });

  const { myId, toggleModal, removeCard } = useContext(AppContext);

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

  const toggleLike = (event) => {
    const card = event.target.closest('.Card_Card__9JkoW').getAttribute('data');
    const likeIcon = event.target.closest('.Button_LikeIcon__DXYuT');

    if (likeIcon.classList.contains('Button_ActiveLikeIcon__Sjrf-')) {
      axiosData
        .delete(`/cards/like/${card}`)
        .then(() =>
          setState((prevState) => ({
            ...prevState,
            activateLike: false,
            likeCounter: prevState.likeCounter - 1,
          }))
        )
        .catch((error) => console.log(error));
    } else {
      axiosData
        .put(`/cards/like/${card}`)
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

  const backgroundImage = {
    backgroundImage: `url('${children.link}')`,
  };

  return (
    <div className={classes.Card} data={children._id}>
      <div
        onClick={toggleModal}
        className={classes.Image}
        style={backgroundImage}
      >
        <Button
          onClick={(event) => removeCard(event, children._id)}
          type={'DeleteIcon'}
          showDeleteIcon={state.showDeleteIcon}
        />
      </div>
      <div className={classes.Description}>
        <h3 className={classes.Name}>{children.name}</h3>
        <div className={classes.Like}>
          <Button
            onClick={(event) => toggleLike(event)}
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
