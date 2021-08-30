import { USER_LOGIN } from '../actions';

// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIAL_STATE = {
  email: '',
  wallet: {
    currencies: [],
    expenses: [],
  },
};

export function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case USER_LOGIN:
    return { ...state, email: action.email };
  default:
    return state;
  }
}

export default user;
