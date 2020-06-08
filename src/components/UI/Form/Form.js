import React from 'react';
import classes from './Form.module.scss';

export default class Form extends React.Component {
  render() {
    const cls = [classes.Form, classes[this.props.type]];

    return (
      <form
        onSubmit={this.props.onSubmit}
        className={cls.join(' ')}
        name={this.props.name}
        style={this.props.style}
        noValidate
      >
        {this.props.children}
      </form>
    );
  }
}
