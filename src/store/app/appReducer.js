import {
  INITIAL_DATA,
  TOGGLE_MODAL,
  SET_MODAL,
  AVATAR_UPDATE,
  INFO_UPDATE,
  CARDS_UPDATE,
  REMOVE_CARD,
} from '../types';

const handlers = {
  [INITIAL_DATA]: (state, payload) => ({
    ...state,
    loading: false,
    userInfo: payload.userInfo,
    initialCards: payload.initialCards,
  }),
  [TOGGLE_MODAL]: (state) => ({ ...state, showModal: !state.showModal }),
  [SET_MODAL]: (state, payload) => ({
    ...state,
    typeModal: payload.typeModal,
    openImage: payload.openImage,
  }),
  [AVATAR_UPDATE]: (state, payload) => ({
    ...state,
    userInfo: payload.userInfo,
  }),
  [INFO_UPDATE]: (state, payload) => ({
    ...state,
    userInfo: payload.userInfo,
  }),
  [CARDS_UPDATE]: (state, payload) => ({
    ...state,
    initialCards: payload.initialCards,
  }),
  [REMOVE_CARD]: (state, payload) => ({
    ...state,
    initialCards: payload.initialCards,
  }),
  DEFAULT: (state) => state,
};

export const AppReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;

  return handler(state, action);
};
