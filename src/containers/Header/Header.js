import React from 'react';
import classes from './Header.module.scss';
import logo from '../../images/logo.svg';

function Header() {
  return (
    <header className={classes.Header}>
      <img src={logo} alt='Logo' className={classes.Logo} />
    </header>
  );
}

export default Header;
