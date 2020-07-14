import {
  AVATAR_MODAL,
  EDIT_MODAL,
  ADD_MODAL,
  VALIDATE_FORM,
  INPUT_CHANGE,
} from '../types';
import {
  createControl,
  validateForm,
} from '../../scripts/formFramework/formFramework';

const handlers = {
  [AVATAR_MODAL]: (state) => ({
    ...state,
    configModal: {
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
  }),
  [EDIT_MODAL]: (state, payload) => ({
    ...state,
    configModal: {
      nameModal: 'редактировать профиль',
      typeForm: 'Edit',
      nameFrom: 'edit',
      nameButton: 'сохранить',
    },
    formControls: {
      name: createControl(
        {
          value: payload.userInfo.name,
          type: 'text',
          name: 'name',
          placeholder: 'Имя',
        },
        { minLength: 2, maxLength: 30, required: true }
      ),
      info: createControl(
        {
          value: payload.userInfo.about,
          type: 'text',
          name: 'info',
          placeholder: 'О себе',
        },
        { minLength: 2, maxLength: 30, required: true }
      ),
    },
  }),
  [ADD_MODAL]: (state) => ({
    ...state,
    configModal: {
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
  }),
  [VALIDATE_FORM]: (state) => ({
    ...state,
    isFormValid: validateForm(state.formControls),
  }),
  [INPUT_CHANGE]: (state, payload) => ({
    ...state,
    formControls: payload.formControls,
    isFormValid: payload.isFormValid,
  }),
  DEFAULT: (state) => state,
};

export const modalReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;

  return handler(state, action);
};
