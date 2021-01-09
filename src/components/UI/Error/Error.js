import React from 'react'
import classes from './Error.module.scss'

const Error = ({ errorMessage }) => {
  return <span className={classes.Error}>{errorMessage}</span>
}

export default Error
