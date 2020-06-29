import React, { useState, useEffect } from 'react';
import './App.scss';
import Context from './context/Context/Context';
import Axios from './scripts/Axios/Axios';
import Layout from './containers/Layout/Layout';
import Header from './containers/Header/Header';
import Profile from './containers/Profile/Profile';
import CardList from './containers/CardList/CardList';
import Modal from './containers/Modal/Modal';
import Loader from './components/Loader/Loader';
import Portal from './components/Portal/Portal';

function App() {
  const [state, setState] = useState({
    loading: true,
    showModal: false,
    myId: '24ee49f7ef633fcc99f70066',
    userInfo: {},
    initialCards: [],
    typeModal: null,
    backgroundImage: null,
  });

  useEffect(() => {
    const fetch = async () => {
      try {
        const responseInfo = await Axios.get('/users/me/');
        const responseCards = await Axios.get('/cards/');
        const myCards = [];

        for (let i = 0; responseCards.data.length > i; i++) {
          if (responseCards.data[i].owner._id === state.myId) {
            myCards.push(responseCards.data[i]);
          }
        }

        setState((prevState) => ({
          ...prevState,
          loading: false,
          userInfo: responseInfo.data,
          initialCards: myCards,
        }));
      } catch (error) {
        console.log(error);
      }
    };

    fetch();
    // eslint-disable-next-line
  }, []);

  const handleShowModal = () => {
    setState((prevState) => ({
      ...prevState,
      showModal: !prevState.showModal,
    }));
  };

  const handleClick = (event) => {
    if (event.target.closest('.Profile_Avatar__2gqkF')) {
      setState((prevState) => ({ ...prevState, typeModal: 'Avatar' }));
    }

    if (event.target.closest('.Button_Edit__2mjyM')) {
      setState((prevState) => ({ ...prevState, typeModal: 'Edit' }));
    }

    if (event.target.closest('.Button_Add__pQA0V')) {
      setState((prevState) => ({ ...prevState, typeModal: 'Add' }));
    }

    if (event.target.closest('.Card_Image__3zHVY')) {
      const backgroundImage = {
        backgroundImage: event.target.style.backgroundImage,
      };

      setState((prevState) => ({
        ...prevState,
        typeModal: 'Image',
        backgroundImage,
      }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const button = event.target.elements.button;

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
          setState((prevState) => ({
            ...prevState,
            userInfo: {
              ...prevState.userInfo,
              avatar: form.elements.link.value,
            },
          }))
        )
        .then(() => handleShowModal())
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
          setState((prevState) => ({
            ...prevState,
            userInfo: {
              ...prevState.userInfo,
              name: form.elements.name.value,
              about: form.elements.info.value,
            },
          }))
        )
        .then(() => handleShowModal())
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
          setState((prevState) => ({
            ...prevState,
            initialCards: state.initialCards.concat(card.data),
          }))
        )
        .then(() => handleShowModal())
        .catch((error) => console.log(error));
    }
  };

  const handleRemoveCard = (event, cardId) => {
    event.stopPropagation();

    const initialCards = state.initialCards.filter(
      (card) => card._id !== cardId
    );

    Axios.delete(`/cards/${cardId}/`)
      .then(() => setState((prevState) => ({ ...prevState, initialCards })))
      .catch((error) => console.log(error));
  };

  return (
    <Context.Provider
      value={{ handleShowModal, handleSubmit, handleRemoveCard }}
    >
      <Layout>
        <Header />
        {state.loading ? (
          <Loader />
        ) : (
          <main onClick={(event) => handleClick(event)}>
            <Profile userInfo={state.userInfo} />
            <CardList myId={state.myId} initialCards={state.initialCards} />
          </main>
        )}
        {state.showModal ? (
          <Portal>
            <Modal
              userInfo={state.userInfo}
              typeModal={state.typeModal}
              backgroundImage={state.backgroundImage}
            />
          </Portal>
        ) : null}
      </Layout>
    </Context.Provider>
  );
}

export default App;
