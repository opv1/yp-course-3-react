import React from 'react';
import classes from './Input.module.scss';

const Input = ({
  onChange,
  value,
  type,
  name,
  placeholder,
  valid,
  validation,
}) => {
  const cls = [classes.Input];

  if (!valid) {
    cls.push(classes.invalid);
  }

  return (
    <input
      onChange={onChange}
      className={cls.join(' ')}
      value={value}
      type={type || 'text'}
      name={name}
      placeholder={placeholder}
      minLength={validation.minLength}
      maxLength={validation.maxLength}
      required
    />
  );
};

export default Input;
