// Esse reducer será responsável por tratar as informações da pessoa usuária
import { LOGIN } from '../actions/index';

const INIT_STATE = { email: '' };

const userReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
  case LOGIN:
    return {
      ...state, email: action.email,
    };
  default:
    return state;
  }
};

export default userReducer;
