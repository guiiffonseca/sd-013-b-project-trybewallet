// Esse reducer será responsável por tratar as informações da pessoa usuária
import { SET_USER } from '../actions';

const INITIAL_STATE_USER = {
  email: '',
};

function user(state = INITIAL_STATE_USER, action) {
  switch (action.type) {
  case SET_USER:
    return {
      ...state,
      email: action.payload.email,
    };
  default:
    return state;
  }
}

export default user;
