// Esse reducer será responsável por tratar as informações da pessoa usuária
import { GET_USER_EMAIL } from '../actions';

export const INITIAL_STATE = {
  email: '',
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_USER_EMAIL:
    return { ...state, email: action.payload };
  default:
    return state;
  }
};

export default user;
