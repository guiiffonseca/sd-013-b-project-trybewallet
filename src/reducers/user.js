// Esse reducer será responsável por tratar as informações da pessoa usuária
import { USER_TYPE } from '../actions';

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
  case USER_TYPE:
    return {
      email: action.payload,
    };
  default:
    return state;
  }
};

export default user;
