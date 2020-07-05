import React, { useReducer } from 'react';
import Axios from '../../scripts/Axios/Axios';
import { AppContext } from './appContext';
import { AppReducer } from './appReducer';
import {
  INITIAL_DATA,
  TOGGLE_MODAL,
  SET_MODAL,
  AVATAR_UPDATE,
  INFO_UPDATE,
  CARDS_UPDATE,
  REMOVE_CARD,
} from '../types';

export const AppState = ({ children }) => {
  const initialState = {
    loading: true,
    showModal: false,
    myId: '24ee49f7ef633fcc99f70066',
    userInfo: {},
    initialCards: [],
    typeModal: null,
    openImage: null,
  };

  const [state, dispatch] = useReducer(AppReducer, initialState);

  const initialData = async () => {
    const responseInfo = await Axios.get('/users/me/');
    const responseCards = await Axios.get('/cards/');
    const myCards = [];

    for (let i = 0; responseCards.data.length > i; i++) {
      if (responseCards.data[i].owner._id === state.myId) {
        myCards.push(responseCards.data[i]);
      }
    }

    dispatch({
      type: INITIAL_DATA,
      userInfo: responseInfo.data,
      initialCards: myCards,
    });
  };

  const toggleModal = () => {
    dispatch({
      type: TOGGLE_MODAL,
    });
  };

  const setModal = (event) => {
    if (event.target.closest('.Profile_Avatar__2gqkF')) {
      dispatch({
        type: SET_MODAL,
        typeModal: 'Avatar',
      });
    }

    if (event.target.closest('.Button_Edit__2mjyM')) {
      dispatch({
        type: SET_MODAL,
        typeModal: 'Edit',
      });
    }

    if (event.target.closest('.Button_Add__pQA0V')) {
      dispatch({
        type: SET_MODAL,
        typeModal: 'Add',
      });
    }

    if (event.target.closest('.Card_Image__3zHVY')) {
      const backgroundImage = {
        backgroundImage: event.target.style.backgroundImage,
      };

      dispatch({
        type: SET_MODAL,
        typeModal: 'Image',
        openImage: backgroundImage,
      });
    }
  };

  const updateData = (event) => {
    event.preventDefault();

    const form = event.target;
    const button = form.elements.button;

    if (event.target.closest('.Form_Avatar__2B2kZ')) {
      const loadPromise = new Promise((resolve) => {
        button.textContent = 'Загрузка...';
        resolve(
          Axios.patch('/users/me/avatar/', {
            avatar: form.elements.link.value,
          })
        );
      });
      loadPromise
        .then(() =>
          dispatch({
            type: AVATAR_UPDATE,
            userInfo: {
              ...state.userInfo,
              avatar: form.elements.link.value,
            },
          })
        )
        .then(() => toggleModal())
        .catch((error) => console.log(error));
    }

    if (event.target.closest('.Form_Edit__32yl-')) {
      const loadPromise = new Promise((resolve) => {
        button.textContent = 'Загрузка...';
        resolve(
          Axios.patch('/users/me/', {
            name: form.elements.name.value,
            about: form.elements.info.value,
          })
        );
      });
      loadPromise
        .then(() =>
          dispatch({
            type: INFO_UPDATE,
            userInfo: {
              ...state.userInfo,
              name: form.elements.name.value,
              about: form.elements.info.value,
            },
          })
        )
        .then(() => toggleModal())
        .catch((error) => console.log(error));
    }

    if (event.target.closest('.Form_Add__3j5Xp')) {
      const loadPromise = new Promise((resolve) => {
        button.textContent = 'Загрузка...';
        resolve(
          Axios.post('/cards/', {
            name: form.elements.name.value,
            link: form.elements.link.value,
          })
        );
      });
      loadPromise
        .then((card) =>
          dispatch({
            type: CARDS_UPDATE,
            initialCards: state.initialCards.concat(card.data),
          })
        )
        .then(() => toggleModal())
        .catch((error) => console.log(error));
    }
  };

  const removeCard = (event, cardId) => {
    event.stopPropagation();

    const filteredCards = initialCards.filter((card) => card._id !== cardId);

    Axios.delete(`/cards/${cardId}/`)
      .then(() =>
        dispatch({
          type: REMOVE_CARD,
          initialCards: filteredCards,
        })
      )
      .catch((error) => console.log(error));
  };

  const {
    loading,
    showModal,
    myId,
    userInfo,
    initialCards,
    typeModal,
    openImage,
  } = state;

  return (
    <AppContext.Provider
      value={{
        loading,
        showModal,
        myId,
        userInfo,
        initialCards,
        typeModal,
        openImage,
        initialData,
        toggleModal,
        setModal,
        updateData,
        removeCard,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
