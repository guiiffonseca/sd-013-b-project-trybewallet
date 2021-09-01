// Esse reducer será responsável por tratar as informações da pessoa usuária
import { LOGIN } from '../actions';

const INITIAL_USER_STATE = {
  currencies: [],
  expenses: [],
  email: '',
};

function user(state = INITIAL_USER_STATE, action) {
  switch (action.type) {
  case LOGIN:
    return { email: action.email };
  default:
    return state;
  }
}

export default user;
