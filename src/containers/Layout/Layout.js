import React from 'react';
import classes from './Layout.module.scss';
import axios from '../../axios/axios';
import Portal from '../../components/Portal/Portal';
import Modal from '../../components/UI/Modal/Modal';
import Header from '../Header/Header';
import Profile from '../Profile/Profile';
import CardList from '../CardList/CardList';

export default class Layout extends React.Component {
  state = {
    myId: '24ee49f7ef633fcc99f70066',
    userInfo: {},
    initialCards: [],
    showModal: false,
    typeModal: null,
    backgroundImage: null,
  };

  async componentDidMount() {
    try {
      const userInfo = await axios.get('/users/me/');
      const initialCards = await axios.get('/cards/');
      const myCards = [];

      for (let i = 0; initialCards.data.length > i; i++) {
        if (initialCards.data[i].owner._id === this.state.myId) {
          myCards.push(initialCards.data[i]);
        }
      }

      this.setState({
        userInfo: userInfo.data,
        initialCards: myCards,
      });
    } catch (error) {
      console.log(error);
    }
  }

  handleShowModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  handleModal = (event) => {
    if (event.target.closest('.Profile_Avatar__2gqkF')) {
      this.setState({
        typeModal: 'Avatar',
      });
    }

    if (event.target.closest('.Button_Edit__2mjyM')) {
      this.setState({
        typeModal: 'Edit',
      });
    }

    if (event.target.closest('.Button_Add__pQA0V')) {
      this.setState({
        typeModal: 'Add',
      });
    }

    if (event.target.closest('.Card_Image__3zHVY')) {
      const backgroundImage = {
        backgroundImage: event.target.style.backgroundImage,
      };

      this.setState({
        typeModal: 'Image',
        backgroundImage,
      });
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;

    if (event.target.closest('.Form_Avatar__2B2kZ')) {
      axios
        .patch('/users/me/avatar/', {
          avatar: form.elements.link.value,
        })
        .then(() =>
          this.setState({
            userInfo: {
              ...this.state.userInfo,
              avatar: form.elements.link.value,
            },
          })
        )
        .catch((error) => console.log(error));
    }

    if (event.target.closest('.Form_Edit__32yl-')) {
      axios
        .patch('/users/me/', {
          name: form.elements.name.value,
          about: form.elements.info.value,
        })
        .then(() =>
          this.setState({
            userInfo: {
              ...this.state.userInfo,
              name: form.elements.name.value,
              about: form.elements.info.value,
            },
          })
        )
        .catch((error) => console.log(error));
    }

    if (event.target.closest('.Form_Add__3j5Xp')) {
      axios
        .post('/cards/', {
          name: form.elements.name.value,
          link: form.elements.link.value,
        })
        .then((card) =>
          this.setState({
            initialCards: this.state.initialCards.concat(card.data),
          })
        )
        .catch((error) => console.log(error));
    }

    return this.handleShowModal();
  };

  handleRemoveCard = (event, cardId) => {
    event.stopPropagation();

    const initialCards = this.state.initialCards.filter(
      (card) => card._id !== cardId
    );

    axios
      .delete(`/cards/${cardId}/`)
      .then(() =>
        this.setState({
          initialCards,
        })
      )
      .catch((error) => console.log(error));
  };

  renderModal = (typeModal, backgroundImage, handleShowModal, handleSubmit) => {
    return (
      <Portal>
        <Modal
          typeModal={typeModal}
          backgroundImage={backgroundImage}
          handleShowModal={handleShowModal}
          handleSubmit={handleSubmit}
        />
      </Portal>
    );
  };

  render() {
    return (
      <div className={classes.Layout}>
        <Header />
        <main onClick={this.handleModal}>
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
        {this.state.showModal
          ? this.renderModal(
              this.state.typeModal,
              this.state.backgroundImage,
              this.handleShowModal,
              this.handleSubmit
            )
          : null}
      </div>
    );
  }
}
