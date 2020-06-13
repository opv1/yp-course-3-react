import React, { Component } from 'react';
import classes from './Card.module.scss';
import Axios from '../../hoc/Axios/Axios';
import Button from '../../components/UI/Button/Button';

class Card extends Component {
  state = {
    showDeleteIcon: false,
    activateLike: false,
    likeCounter: null,
  };

  componentDidMount() {
    if (this.props.children.owner._id === this.props.myId) {
      this.setState({
        showDeleteIcon: true,
      });
    }

    this.props.children.likes.forEach((like) => {
      if (like._id === this.props.myId) {
        this.setState({
          activateLike: true,
        });
      }
    });

    this.setState({
      likeCounter: this.props.children.likes.length,
    });
  }

  handleLike = (event) => {
    const card = event.target.closest('.Card_Card__1-aIe').getAttribute('data');
    const likeIcon = event.target.closest('.Button_LikeIcon__2q2NK');

    if (likeIcon.classList.contains('Button_ActiveLikeIcon__1dC21')) {
      Axios.delete(`/cards/like/${card}`)
        .then(() =>
          this.setState((prevState) => {
            return {
              activateLike: false,
              likeCounter: prevState.likeCounter - 1,
            };
          })
        )
        .catch((error) => console.log(error));
    } else {
      Axios.put(`/cards/like/${card}`)
        .then(() =>
          this.setState((prevState) => {
            return {
              activateLike: true,
              likeCounter: prevState.likeCounter + 1,
            };
          })
        )
        .catch((error) => console.log(error));
    }
  };

  render() {
    const { handleShowModal, handleRemoveCard } = this.props;
    const { link, _id, name } = this.props.children;
    const backgroundImage = {
      backgroundImage: `url('${link}')`,
    };

    return (
      <div className={classes.Card} data={_id}>
        <div
          onClick={handleShowModal}
          className={classes.Image}
          style={backgroundImage}
        >
          <Button
            onClick={handleRemoveCard}
            type={'DeleteIcon'}
            showDeleteIcon={this.state.showDeleteIcon}
          />
        </div>
        <div className={classes.Description}>
          <h3 className={classes.Name}>{name}</h3>
          <div className={classes.Like}>
            <Button
              onClick={this.handleLike}
              type={'LikeIcon'}
              activateLike={this.state.activateLike}
            />
            <span className={classes.LikeCounter}>
              {this.state.likeCounter}
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
