import React from 'react';
import classes from './Input.module.scss';

function isInvalid({ valid, touched, shouldValidate }) {
  return !valid && touched && shouldValidate;
}

export default class Input extends React.Component {
  render() {
    const cls = [classes.Input];

    if (isInvalid(this.props)) {
      cls.push(classes.invalid);
    }

    return (
      <div>
        <input
          onChange={this.props.onChange}
          className={cls.join(' ')}
          value={this.props.value}
          type={this.props.type}
          name={this.props.name}
          placeholder={this.props.placeholder}
          minLength={this.props.minLength}
          maxLength={this.props.maxLength}
          required
        />

        {isInvalid(this.props) ? (
          <span className={classes.Error}>{this.props.errorMessage}</span>
        ) : null}
      </div>
    );
  }
}
