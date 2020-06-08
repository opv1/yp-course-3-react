import React from 'react';
import classes from './Modal.module.scss';
import close from '../../../images/close.svg';
import Form from '../Form/Form';
import Input from '../Input/Input';
import Button from '../Button/Button';

export default class Modal extends React.Component {
  state = {
    modalConfig: {},
    formControls: {},
  };

  componentDidMount() {
    if (this.props.typeModal === 'Avatar') {
      this.setState({
        modalConfig: {
          typeModal: this.props.typeModal,
          nameModal: 'обновить аватар',
          typeForm: 'Avatar',
          nameFrom: 'avatar',
          nameButton: 'сохранить',
        },

        formControls: {
          avatar: {
            value: '',
            type: 'url',
            name: 'link',
            placeholder: 'Ссылка на аватар',
            errorMessage: '',
            valid: false,
            touched: false,
            validation: {
              required: true,
            },
          },
        },
      });
    }

    if (this.props.typeModal === 'Edit') {
      this.setState({
        modalConfig: {
          typeModal: this.props.typeModal,
          nameModal: 'редактировать профиль',
          typeForm: 'Edit',
          nameFrom: 'edit',
          nameButton: 'сохранить',
        },

        formControls: {
          name: {
            value: '',
            type: 'text',
            name: 'name',
            placeholder: 'Имя',
            errorMessage: '',
            valid: false,
            touched: false,
            validation: {
              minLength: 2,
              maxLength: 30,
              required: true,
            },
          },

          info: {
            value: '',
            type: 'text',
            name: 'info',
            placeholder: 'О себе',
            errorMessage: '',
            valid: false,
            touched: false,
            validation: {
              minLength: 2,
              maxLength: 30,
              required: true,
            },
          },
        },
      });
    }

    if (this.props.typeModal === 'Add') {
      this.setState({
        modalConfig: {
          typeModal: this.props.typeModal,
          nameModal: 'новое место',
          typeForm: 'Add',
          nameFrom: 'add',
          nameButton: '+',
        },

        formControls: {
          name: {
            value: '',
            type: 'text',
            name: 'name',
            placeholder: 'Название',
            errorMessage: '',
            valid: false,
            touched: false,
            validation: {
              minLength: 2,
              maxLength: 30,
              required: true,
            },
          },

          link: {
            value: '',
            type: 'url',
            name: 'link',
            placeholder: 'Ссылка на картинку',
            errorMessage: '',
            valid: false,
            touched: false,
            validation: {
              required: true,
            },
          },
        },
      });
    }

    if (this.props.typeModal === 'Image') {
      this.setState({
        modalConfig: {
          typeModal: this.props.typeModal,
          backgroundImage: this.props.backgroundImage,
        },
      });
    }
  }

  setErrorMessage = (value, validation) => {
    let errorMessage = '';

    if (value.length <= validation.minLength) {
      errorMessage = 'Должно быть от 2 до 30 символов';
    } else {
      errorMessage = 'Это обязательное поле';
    }

    return errorMessage;
  };

  validateControl = (value, validation) => {
    let isValid = true;

    if (!validation) {
      return true;
    }

    if (validation.minLength) {
      isValid = value.length >= validation.minLength && isValid;
    }

    if (validation.required) {
      isValid = value.trim() !== '' && isValid;
    }

    return isValid;
  };

  handleInputChange = (event, controlName) => {
    const formControls = { ...this.state.formControls };
    const control = { ...formControls[controlName] };

    control.value = event.target.value;
    control.errorMessage = this.setErrorMessage(
      control.value,
      control.validation
    );
    control.valid = this.validateControl(control.value, control.validation);
    control.touched = true;

    formControls[controlName] = control;

    this.setState({
      formControls,
    });
  };

  renderInputs = () => {
    return Object.keys(this.state.formControls).map((controlName, index) => {
      const control = this.state.formControls[controlName];

      return (
        <Input
          key={controlName + index}
          onChange={(event) => this.handleInputChange(event, controlName)}
          value={control.value}
          type={control.type}
          name={control.name}
          placeholder={control.placeholder}
          errorMessage={control.errorMessage}
          valid={control.valid}
          touched={control.touched}
          shouldValidate={!!control.validation}
        />
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
    const clsContent = [classes.Content, classes.ContentImage];
    const displayNone = typeModal === 'Image' ? { display: 'none' } : null;
    const disabled = this.state.formControls.valid;

    return (
      <div className={cls.join(' ')}>
        <div
          className={
            typeModal === 'Image' ? clsContent.join(' ') : classes.Content
          }
          style={backgroundImage}
        >
          <img
            onClick={handleShowModal}
            src={close}
            alt='Close'
            className={classes.Close}
          />
          <h3 className={classes.Title} style={displayNone}>
            {nameModal}
          </h3>
          <Form
            onSubmit={handleSubmit}
            type={typeForm}
            name={nameFrom}
            style={displayNone}
          >
            {this.renderInputs()}
            <Button type={'Popup'} disabled={disabled}>
              {nameButton}
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}
