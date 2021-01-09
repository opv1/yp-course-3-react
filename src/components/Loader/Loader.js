import React from 'react'
import classes from './Loader.module.scss'

const Loader = () => {
  return (
    <div className={classes.Loader}>
      <div className={classes.Loading}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default Loader
