import React, { useContext } from 'react';
import classes from './Profile.module.scss';
import Context from '../../context/Context/Context';
import Button from '../../components/UI/Button/Button';

function Profile({ userInfo }) {
  const { handleShowModal } = useContext(Context);

  const backgroundImage = {
    backgroundImage: `url('${userInfo.avatar}')`,
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
          <h1 className={classes.Name}>{userInfo.name}</h1>
          <p className={classes.Job}>{userInfo.about}</p>
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

export default Profile;
