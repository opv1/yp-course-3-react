import React from 'react';
import classes from './Form.module.scss';

const Form = (props) => {
  const { onSubmit, type, name, style } = props;
  const cls = [classes.Form, classes[type]];

  return (
    <form
      onSubmit={onSubmit}
      className={cls.join(' ')}
      name={name}
      style={style}
      noValidate
    >
      {props.children}
    </form>
  );
};

export default Form;
