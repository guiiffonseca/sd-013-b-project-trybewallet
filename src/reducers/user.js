// Esse reducer será responsável por tratar as informações da pessoa usuária
import { USER_NAME } from '../actions';

const INITIAL_STATE = {
  email: '',
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case USER_NAME:
    return { ...state, email: action.payload };
  default:
    return state;
  }
};

export default userReducer;
