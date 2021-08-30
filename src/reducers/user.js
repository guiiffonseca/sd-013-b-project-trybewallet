// Esse reducer será responsável por tratar as informações da pessoa usuária
import { SET_LOGIN_VALUE } from '../actions/index';

export const initialState = {
  user: {
    email: '',
  },
  wallet: {
    currencies: [],
    expenses: [],
  },
};

const reducerUser = (state = initialState, action) => {
  switch (action.type) {
  case SET_LOGIN_VALUE:
    return { ...state, user: action.payload };
  default:
    return state;
  }
};

export default reducerUser;
