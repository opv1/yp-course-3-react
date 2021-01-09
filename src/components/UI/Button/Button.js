import React from 'react'
import classes from './Button.module.scss'

const Button = ({
  onClick,
  type,
  disabled,
  activateLike,
  id,
  showDeleteIcon,
  children,
}) => {
  const cls = [classes.Button, classes[type], `Button_${type}`]

  if (disabled) {
    cls.push(classes.Disabled)
  }

  if (activateLike) {
    cls.push(`${classes.ActiveLikeIcon} Button_ActiveLikeIcon__${id}`)
  }

  if (showDeleteIcon) {
    cls.push(classes.DisplayBlock)
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
  )
}

export default Button
