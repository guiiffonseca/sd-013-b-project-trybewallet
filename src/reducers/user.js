// Esse reducer será responsável por tratar as informações da pessoa usuária

import { LOGIN_SUCCESS } from '../actions/index';

const INITIAL_STATE = {
  email: '',
  password: '',
  login: false,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case LOGIN_SUCCESS:
    return {
      ...state,
      email: action.payload.email,
      login: true,
    };
  default:
    return state;
  }
};

export default userReducer;
