import React from 'react';
import classes from './Button.module.scss';

export default class Button extends React.Component {
  render() {
    const cls = [classes.Button, classes[this.props.type]];

    if (this.props.activateLike) {
      cls.push(classes.ActiveLikeIcon);
    }

    if (this.props.showDeleteIcon) {
      cls.push(classes.DisplayBlock);
    }

    return (
      <button
        onClick={this.props.onClick}
        className={cls.join(' ')}
        disabled={this.props.disabled}
      >
        {this.props.children}
      </button>
    );
  }
}
