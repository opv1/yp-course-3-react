import React from 'react';
import classes from './Error.module.scss';

export default class Error extends React.Component {
  render() {
    const cls = [classes.Error, classes.ErrorActive, classes[this.props.type]];

    return;
  }
}
