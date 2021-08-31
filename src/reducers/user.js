// Esse reducer será responsável por tratar as informações da pessoa usuária
import { LOGIN } from '../actions/index';

const initialState = {
  email: '',
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
  case LOGIN:
    return {
      ...state,
      email: action.user,
    };
  default:
    return state;
  }
};

export default userReducer;
