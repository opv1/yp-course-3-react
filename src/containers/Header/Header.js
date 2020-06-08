import React from 'react';
import classes from './Header.module.scss';
import logo from '../../images/logo.svg';

export default class Header extends React.Component {
  render() {
    return (
      <header className={classes.Header}>
        <img src={logo} alt='Logo' className={classes.Logo} />
      </header>
    );
  }
}
