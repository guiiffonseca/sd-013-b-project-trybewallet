// Esse reducer será responsável por tratar as informações da pessoa usuária
import { VALIDA_EMAIL } from '../actions';

const INITIAL_STATE = {
  user: {
    email: '',
  },
  wallet: {
    currencies: [],
    expenses: [],
  },
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case VALIDA_EMAIL:
    return { ...state, email: action.email };
  default:
    return state;
  }
};

export default user;
