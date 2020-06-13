import React, { Component } from 'react';
import classes from './Header.module.scss';
import logo from '../../images/logo.svg';

class Header extends Component {
  render() {
    return (
      <header className={classes.Header}>
        <img src={logo} alt='Logo' className={classes.Logo} />
      </header>
    );
  }
}

export default Header;
