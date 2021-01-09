import React, { useContext, useEffect } from 'react'
import classes from './Modal.module.scss'
import close from '../../images/close.svg'
import Form from '../UI/Form/Form'
import Button from '../UI/Button/Button'
import { AppContext } from '../../contexts/app/AppContext'
import { ModalContext } from '../../contexts/modal/ModalContext'

function Modal() {
  const {
    userInfo,
    typeModal,
    openImage,
    updateData,
    toggleModal,
  } = useContext(AppContext)

  const { configModal, isFormValid, setConfig, renderInputs } = useContext(
    ModalContext
  )

  useEffect(() => {
    if (typeModal === 'Edit') {
      setConfig(typeModal, userInfo)
    } else {
      setConfig(typeModal)
    }
    // eslint-disable-next-line
  }, [])

  const cls = [classes.Modal, classes[typeModal]]

  return (
    <div className={cls.join(' ')}>
      <div
        className={
          typeModal === 'Image'
            ? (classes.Content, classes.ContentImage)
            : classes.Content
        }
        style={typeModal === 'Image' ? openImage : null}
      >
        <img
          onClick={toggleModal}
          src={close}
          alt='Close'
          className={classes.Close}
        />
        <h3
          className={classes.Title}
          style={typeModal === 'Image' ? { display: 'none' } : null}
        >
          {configModal.nameModal}
        </h3>
        <Form
          onSubmit={updateData}
          type={configModal.typeForm}
          name={configModal.nameFrom}
          style={typeModal === 'Image' ? { display: 'none' } : null}
        >
          {renderInputs()}
          <Button type={'Popup'} disabled={!isFormValid}>
            {configModal.nameButton}
          </Button>
        </Form>
      </div>
    </div>
  )
}

export default Modal
