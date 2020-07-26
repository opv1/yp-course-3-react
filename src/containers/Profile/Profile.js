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
          onClick={toggleModal}
          className={classes.Avatar}
          style={backgroundImage}
        ></div>
        <div className={classes.Data}>
          <h1 className={classes.Name}>{userInfo.name}</h1>
          <p className={classes.Job}>{userInfo.about}</p>
          <Button onClick={toggleModal} type={'Edit'}>
            edit
          </Button>
        </div>
        <Button onClick={toggleModal} type={'Add'}>
          +
        </Button>
      </div>
    </div>
  );
}

export default Profile;
