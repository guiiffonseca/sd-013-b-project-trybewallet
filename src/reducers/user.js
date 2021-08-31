// Esse reducer será responsável por tratar as informações da pessoa usuária
import { SET_LOGIN_VALUE } from '../actions/index';

const initialState = {
  email: '',
  password: '',
};

const user = (state = initialState, action) => {
  switch (action.type) {
  case SET_LOGIN_VALUE:
    return {
      ...state,
      email: action.payload.email,
      password: action.payload.password,
    };
  default:
    return state;
  }
};

export default user;
