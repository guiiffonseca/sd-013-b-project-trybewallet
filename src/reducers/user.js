// Esse reducer será responsável por tratar as informações da pessoa usuária
import { DEFAULT_STATE } from '.';
import { LOGIN } from '../actions';

function user(state = DEFAULT_STATE, action) {
  switch (action.type) {
  case LOGIN:
    return { ...state, ...action.payload };

  default:
    return state;
  }
}

export default user;
