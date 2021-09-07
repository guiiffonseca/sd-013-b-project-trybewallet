// Esse reducer será responsável por tratar as informações da pessoa usuária
import { SET_LOGIN_VALUE } from '../actions/index';

const initialState = {
  user: {
    email: '',
    password: '',
  },
};

const reducerUser = (state = initialState, action) => {
  switch (action.type) {
  case SET_LOGIN_VALUE:
    return {
      user: {
        email: action.payload.user.email,
        password: action.payload.user.password,
      },
    };
  default:
    return state;
  }
};

export default reducerUser;
