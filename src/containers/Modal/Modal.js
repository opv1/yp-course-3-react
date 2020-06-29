import React, { useState, useEffect, useContext } from 'react';
import classes from './Modal.module.scss';
import close from '../../images/close.svg';
import Auxiliary from '../../scripts/Auxiliary/Auxiliary';
import Context from '../../context/Context/Context';
import Form from '../../components/UI/Form/Form';
import Input from '../../components/UI/Input/Input';
import Error from '../../components/UI/Error/Error';
import Button from '../../components/UI/Button/Button';
import {
  createControl,
  validateForm,
  validateControl,
  errorMessage,
} from '../../scripts/formFramework/formFramework';

function Modal({ userInfo, typeModal, backgroundImage }) {
  const [state, setState] = useState({
    modalConfig: {},
    formControls: {},
    isFormValid: false,
  });

  useEffect(() => {
    if (typeModal === 'Avatar') {
      setState((prevState) => ({
        ...prevState,
        modalConfig: {
          nameModal: 'обновить аватар',
          typeForm: 'Avatar',
          nameFrom: 'avatar',
          nameButton: 'сохранить',
        },
        formControls: {
          avatar: createControl(
            {
              value: '',
              type: 'url',
              name: 'link',
              placeholder: 'Ссылка на аватар',
            },
            { url: true, required: true }
          ),
        },
      }));
    }

    if (typeModal === 'Edit') {
      setState((prevState) => ({
        ...prevState,
        modalConfig: {
          nameModal: 'редактировать профиль',
          typeForm: 'Edit',
          nameFrom: 'edit',
          nameButton: 'сохранить',
        },
        formControls: {
          name: createControl(
            {
              value: userInfo.name,
              type: 'text',
              name: 'name',
              placeholder: 'Имя',
            },
            { minLength: 2, maxLength: 30, required: true }
          ),
          info: createControl(
            {
              value: userInfo.about,
              type: 'text',
              name: 'info',
              placeholder: 'О себе',
            },
            { minLength: 2, maxLength: 30, required: true }
          ),
        },
        isFormValid: validateForm(state.formControls),
      }));
    }

    if (typeModal === 'Add') {
      setState((prevState) => ({
        ...prevState,
        modalConfig: {
          nameModal: 'новое место',
          typeForm: 'Add',
          nameFrom: 'add',
          nameButton: '+',
        },
        formControls: {
          name: createControl(
            { value: '', type: 'text', name: 'name', placeholder: 'Название' },
            { minLength: 2, maxLength: 30, required: true }
          ),
          link: createControl(
            {
              value: '',
              type: 'url',
              name: 'link',
              placeholder: 'Ссылка на картинку',
            },
            { url: true, required: true }
          ),
        },
      }));
    }
    // eslint-disable-next-line
  }, []);

  const handleChange = (event, controlName) => {
    const formControls = { ...state.formControls };
    const control = { ...formControls[controlName] };

    control.value = event.target.value;
    control.touched = true;
    control.valid = validateControl(control.value, control.validation);
    control.errorMessage = errorMessage(control.value, control.validation);

    formControls[controlName] = control;

    const isFormValid = validateForm(formControls);

    setState((prevState) => ({
      ...prevState,
      formControls,
      isFormValid,
    }));
  };

  const handleRenderInputs = () => {
    return Object.keys(state.formControls).map((controlName, index) => {
      const control = state.formControls[controlName];

      return (
        <Auxiliary key={index + 1}>
          <Input
            onChange={(event) => handleChange(event, controlName)}
            value={control.value}
            type={control.type}
            name={control.name}
            placeholder={control.placeholder}
            valid={control.valid}
            validation={control.validation}
          />
          {!control.valid ? (
            <Error errorMessage={control.errorMessage} />
          ) : null}
        </Auxiliary>
      );
    });
  };

  const { handleShowModal, handleSubmit } = useContext(Context);

  const { nameModal, typeForm, nameFrom, nameButton } = state.modalConfig;

  const cls = [classes.Modal, classes[typeModal]];

  return (
    <div className={cls.join(' ')}>
      <div
        className={
          typeModal === 'Image'
            ? (classes.Content, classes.ContentImage)
            : classes.Content
        }
        style={typeModal === 'Image' ? backgroundImage : null}
      >
        <img
          onClick={handleShowModal}
          src={close}
          alt='Close'
          className={classes.Close}
        />
        <h3
          className={classes.Title}
          style={typeModal === 'Image' ? { display: 'none' } : null}
        >
          {nameModal}
        </h3>
        <Form
          onSubmit={handleSubmit}
          type={typeForm}
          name={nameFrom}
          style={typeModal === 'Image' ? { display: 'none' } : null}
        >
          {handleRenderInputs()}
          <Button type={'Popup'} disabled={!state.isFormValid}>
            {nameButton}
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Modal;
