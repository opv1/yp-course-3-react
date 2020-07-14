import React, { useContext } from 'react';
import classes from './Profile.module.scss';
import Button from '../../components/UI/Button/Button';
import { AppContext } from '../../context/app/AppContext';

function Profile() {
  const { userInfo, toggleModal } = useContext(AppContext);

  const backgroundImage = {
    backgroundImage: `url('${userInfo.avatar}')`,
  };

  return (
    <div className={classes.Profile}>
      <div className={classes.Info}>
        <div
          className={classes.Avatar}
          onClick={toggleModal}
          style={backgroundImage}
        ></div>
        <div className={classes.Data}>
          <h1 className={classes.Name}>{userInfo.name}</h1>
          <p className={classes.Job}>{userInfo.about}</p>
          <Button type={'Edit'} onClick={toggleModal}>
            edit
          </Button>
        </div>
        <Button type={'Add'} onClick={toggleModal}>
          +
        </Button>
      </div>
    </div>
  );
}

export default Profile;
