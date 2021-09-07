// Esse reducer será responsável por tratar as informações da pessoa usuária
import { ALL_ACTIONS } from '../actions';

const INITIAL_STATE = {
  email: '',
};

const user = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
  case ALL_ACTIONS.SET_EMAIL:
    return {
      ...state,
      email: payload,
    };
  default:
    return state;
  }
};

export default user;
