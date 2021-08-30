// Esse reducer será responsável por tratar as informações da pessoa usuária
import { SET_USER } from '../actions/index';

const INITIAL_STATE_USER = {
  email: '',
  password: '',
};

function user(state = INITIAL_STATE_USER, action) {
  switch (action.type) {
  case SET_USER:
    return {
      ...state,
      email: action.payload.email,
      password: action.payload.password,
    };
  default:
    return state;
  }
}

export default user;
