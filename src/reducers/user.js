// Esse reducer será responsável por tratar as informações da pessoa usuária
import { SAVE_USER } from '../actions';

const INICIAL_USER_STATE = {
  email: '',
};

const user = (state = INICIAL_USER_STATE, action) => {
  switch (action.type) {
  case SAVE_USER:
    return {
      email: action.payload,
    };
  default:
    return state;
  }
};

export default user;
