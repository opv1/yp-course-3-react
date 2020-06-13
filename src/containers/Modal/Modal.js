import React, { Component } from 'react';
import classes from './Modal.module.scss';
import close from '../../images/close.svg';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import Form from '../../components/UI/Form/Form';
import Input from '../../components/UI/Input/Input';
import Error from '../../components/UI/Error/Error';
import Button from '../../components/UI/Button/Button';
import {
  createControl,
  validateForm,
  validateControl,
  errorMessage,
} from '../../formFramework/formFramework';

class Modal extends Component {
  state = {
    modalConfig: {},
    formControls: {},
    isFormValid: false,
  };

  componentDidMount() {
    if (this.props.typeModal === 'Avatar') {
      return this.setState({
        modalConfig: {
          typeModal: this.props.typeModal,
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
      });
    }

    if (this.props.typeModal === 'Edit') {
      return this.setState({
        modalConfig: {
          typeModal: this.props.typeModal,
          nameModal: 'редактировать профиль',
          typeForm: 'Edit',
          nameFrom: 'edit',
          nameButton: 'сохранить',
        },
        formControls: {
          name: createControl(
            {
              value: this.props.userInfo.name,
              type: 'text',
              name: 'name',
              placeholder: 'Имя',
            },
            { minLength: 2, maxLength: 30, required: true }
          ),
          info: createControl(
            {
              value: this.props.userInfo.about,
              type: 'text',
              name: 'info',
              placeholder: 'О себе',
            },
            { minLength: 2, maxLength: 30, required: true }
          ),
        },
        isFormValid: validateForm(this.state.formControls),
      });
    }

    if (this.props.typeModal === 'Add') {
      return this.setState({
        modalConfig: {
          typeModal: this.props.typeModal,
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
      });
    }

    if (this.props.typeModal === 'Image') {
      return this.setState({
        modalConfig: {
          typeModal: this.props.typeModal,
          backgroundImage: this.props.backgroundImage,
        },
      });
    }

    return false;
  }

  handleClick = (event, handleShowModal) => {
    if (event.target.classList.contains('Modal_Modal__3rlzY')) {
      return handleShowModal();
    }

    return false;
  };

  handleChange = (event, controlName) => {
    const formControls = { ...this.state.formControls };
    const control = { ...formControls[controlName] };

    control.value = event.target.value;
    control.touched = true;
    control.valid = validateControl(control.value, control.validation);
    control.errorMessage = errorMessage(control.value, control.validation);

    formControls[controlName] = control;

    const isFormValid = validateForm(formControls);

    this.setState({
      formControls,
      isFormValid,
    });
  };

  handleRenderInputs = () => {
    return Object.keys(this.state.formControls).map((controlName, index) => {
      const control = this.state.formControls[controlName];

      return (
        <Auxiliary key={index + 1}>
          <Input
            onChange={(event) => this.handleChange(event, controlName)}
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

  render() {
    const { handleShowModal, handleSubmit } = this.props;
    const {
      typeModal,
      nameModal,
      typeForm,
      nameFrom,
      nameButton,
      backgroundImage,
    } = this.state.modalConfig;
    const cls = [classes.Modal, classes[typeModal]];

    return (
      <div className={cls.join(' ')}>
        <div
          className={
            typeModal === 'Image'
              ? (classes.Content, classes.ContentImage)
              : classes.Content
          }
          style={backgroundImage}
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
            {this.handleRenderInputs()}
            <Button type={'Popup'} disabled={!this.state.isFormValid}>
              {nameButton}
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default Modal;
