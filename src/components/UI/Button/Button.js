import React from 'react';
import classes from './Button.module.scss';

const Button = ({
  onClick,
  type,
  disabled,
  activateLike,
  showDeleteIcon,
  children,
}) => {
  const cls = [classes.Button, classes[type]];

  if (disabled) {
    cls.push(classes.Disabled);
  }

  if (activateLike) {
    cls.push(classes.ActiveLikeIcon);
  }

  if (showDeleteIcon) {
    cls.push(classes.DisplayBlock);
  }

  return (
    <button
      onClick={onClick}
      className={cls.join(' ')}
      name={'button'}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
