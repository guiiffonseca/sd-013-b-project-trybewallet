// Esse reducer será responsável por tratar as informações da pessoa usuária
import { USER_EMAIL } from '../actions/userEmail';

const INITIAL_STATE_USER = {
  email: '',
};

function user(state = INITIAL_STATE_USER, action) {
  switch (action.type) {
  case USER_EMAIL:
    return { ...state, email: action.payload };
  default:
    return state;
  }
}

export default user;
