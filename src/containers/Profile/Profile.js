import React, { Component } from 'react';
import classes from './Profile.module.scss';
import Button from '../../components/UI/Button/Button';

class Profile extends Component {
  render() {
    const { userInfo, handleShowModal } = this.props;
    const { avatar, name, about } = userInfo;
    const backgroundImage = {
      backgroundImage: `url('${avatar}')`,
    };

    return (
      <div className={classes.Profile}>
        <div className={classes.Info}>
          <div
            className={classes.Avatar}
            onClick={handleShowModal}
            style={backgroundImage}
          ></div>
          <div className={classes.Data}>
            <h1 className={classes.Name}>{name}</h1>
            <p className={classes.Job}>{about}</p>
            <Button type={'Edit'} onClick={handleShowModal}>
              edit
            </Button>
          </div>
          <Button type={'Add'} onClick={handleShowModal}>
            +
          </Button>
        </div>
      </div>
    );
  }
}

export default Profile;
