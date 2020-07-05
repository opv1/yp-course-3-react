import React, { useReducer } from 'react';
import Auxiliary from '../../scripts/Auxiliary/Auxiliary';
import Input from '../../components/UI/Input/Input';
import Error from '../../components/UI/Error/Error';
import { ModalContext } from './modalContext';
import { ModalReducer } from './modalReducer';
import {
  AVATAR_MODAL,
  EDIT_MODAL,
  ADD_MODAL,
  VALIDATE_FORM,
  INPUT_CHANGE,
} from '../types';
import {
  validateForm,
  validateControl,
  errorMessage,
} from '../../scripts/formFramework/formFramework';

export const ModalState = ({ children }) => {
  const initialState = {
    configModal: {},
    formControls: {},
    isFormValid: false,
  };

  const [state, dispatch] = useReducer(ModalReducer, initialState);

  const setConfig = (typeModal, userInfo) => {
    if (typeModal === 'Avatar') {
      dispatch({
        type: AVATAR_MODAL,
      });
      dispatch({
        type: VALIDATE_FORM,
      });
    }
    if (typeModal === 'Edit') {
      dispatch({
        type: EDIT_MODAL,
        userInfo,
      });
      dispatch({
        type: VALIDATE_FORM,
      });
    }
    if (typeModal === 'Add') {
      dispatch({
        type: ADD_MODAL,
      });
      dispatch({
        type: VALIDATE_FORM,
      });
    }
  };

  const inputChange = (event, controlName) => {
    const formControls = { ...state.formControls };
    const control = { ...formControls[controlName] };

    control.value = event.target.value;
    control.touched = true;
    control.valid = validateControl(control.value, control.validation);
    control.errorMessage = errorMessage(
      control.value,
      control.validation,
      control.touched
    );

    formControls[controlName] = control;

    const isFormValid = validateForm(formControls);

    dispatch({
      type: INPUT_CHANGE,
      formControls,
      isFormValid,
    });
  };

  const renderInputs = () => {
    return Object.keys(state.formControls).map((controlName, index) => {
      const control = state.formControls[controlName];

      return (
        <Auxiliary key={index + 1}>
          <Input
            onChange={(event) => inputChange(event, controlName)}
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

  const { configModal, formControls, isFormValid } = state;

  return (
    <ModalContext.Provider
      value={{
        configModal,
        formControls,
        isFormValid,
        setConfig,
        renderInputs,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
