import React, { Component } from 'react';
import './App.module.scss';
import Axios from './hoc/Axios/Axios';
import Layout from './hoc/Layout/Layout';
import Header from './containers/Header/Header';
import Profile from './containers/Profile/Profile';
import CardList from './containers/CardList/CardList';
import Modal from './containers/Modal/Modal';
import Loader from './components/Loader/Loader';
import Portal from './components/Portal/Portal';

class App extends Component {
  state = {
    loading: true,
    showModal: false,
    myId: '24ee49f7ef633fcc99f70066',
    userInfo: {},
    initialCards: [],
    typeModal: null,
    backgroundImage: null,
  };

  async componentDidMount() {
    try {
      const responseInfo = await Axios.get('/users/me/');
      const responseCards = await Axios.get('/cards/');
      const myCards = [];

      for (let i = 0; responseCards.data.length > i; i++) {
        if (responseCards.data[i].owner._id === this.state.myId) {
          myCards.push(responseCards.data[i]);
        }
      }

      this.setState({
        loading: false,
        userInfo: responseInfo.data,
        initialCards: myCards,
      });
    } catch (error) {
      console.log(error);
    }
  }

  handleShowModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  handleClick = (event) => {
    if (event.target.closest('.Profile_Avatar__2gqkF')) {
      return this.setState({
        typeModal: 'Avatar',
      });
    }

    if (event.target.closest('.Button_Edit__2mjyM')) {
      return this.setState({
        typeModal: 'Edit',
      });
    }

    if (event.target.closest('.Button_Add__pQA0V')) {
      return this.setState({
        typeModal: 'Add',
      });
    }

    if (event.target.closest('.Card_Image__3zHVY')) {
      const backgroundImage = {
        backgroundImage: event.target.style.backgroundImage,
      };

      return this.setState({
        typeModal: 'Image',
        backgroundImage,
      });
    }

    if (event.target.classList.contains('Modal_Modal__3rlzY')) {
      return this.handleShowModal();
    }

    return false;
  };

  handleSubmit = (event) => {
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
      return loadPromise
        .then(() =>
          this.setState({
            userInfo: {
              ...this.state.userInfo,
              avatar: form.elements.link.value,
            },
          })
        )
        .then(() => this.handleShowModal())
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
      return loadPromise
        .then(() =>
          this.setState({
            userInfo: {
              ...this.state.userInfo,
              name: form.elements.name.value,
              about: form.elements.info.value,
            },
          })
        )
        .then(() => this.handleShowModal())
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
      return loadPromise
        .then((card) =>
          this.setState({
            initialCards: this.state.initialCards.concat(card.data),
          })
        )
        .then(() => this.handleShowModal())
        .catch((error) => console.log(error));
    }

    return false;
  };

  handleRemoveCard = (event, cardId) => {
    event.stopPropagation();

    const initialCards = this.state.initialCards.filter(
      (card) => card._id !== cardId
    );

    Axios.delete(`/cards/${cardId}/`)
      .then(() =>
        this.setState({
          initialCards,
        })
      )
      .catch((error) => console.log(error));
  };

  render() {
    return (
      <Layout>
        <Header />
        {this.state.loading ? (
          <Loader />
        ) : (
          <main onClick={(event) => this.handleClick(event)}>
            <Profile
              userInfo={this.state.userInfo}
              handleShowModal={this.handleShowModal}
            />
            <CardList
              myId={this.state.myId}
              initialCards={this.state.initialCards}
              handleShowModal={this.handleShowModal}
              handleRemoveCard={this.handleRemoveCard}
            />
          </main>
        )}
        {this.state.showModal ? (
          <Portal>
            <Modal
              userInfo={this.state.userInfo}
              typeModal={this.state.typeModal}
              backgroundImage={this.state.backgroundImage}
              handleShowModal={this.handleShowModal}
              handleSubmit={this.handleSubmit}
            />
          </Portal>
        ) : null}
      </Layout>
    );
  }
}

export default App;
