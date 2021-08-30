// Esse reducer será responsável por tratar as informações da pessoa usuária
import { SUBMIT_LOGIN } from '../actions';

const INNITTIAL_STATE = {
  email: '',
};

function user(state = INNITTIAL_STATE, action) {
  switch (action.type) {
  case SUBMIT_LOGIN:
    return {
      ...state,
      email: action.email,
    };
  default:
    return state;
  }
}

export default user;
