import React, { useContext } from 'react'
import classes from './CardList.module.scss'
import Card from '../Card/Card'
import { AppContext } from '../../contexts/app/AppContext'

function CardList() {
  const { initialCards } = useContext(AppContext)

  return (
    <div className={classes.CardList}>
      {initialCards.map((card) => {
        return <Card key={card._id}>{card}</Card>
      })}
    </div>
  )
}

export default CardList
