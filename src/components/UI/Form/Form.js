import React from 'react';
import classes from './Form.module.scss';

const Form = ({ onSubmit, type, name, style, children }) => {
  const cls = [classes.Form, classes[type]];

  return (
    <form
      onSubmit={onSubmit}
      className={cls.join(' ')}
      name={name}
      style={style}
      noValidate
    >
      {children}
    </form>
  );
};

export default Form;
