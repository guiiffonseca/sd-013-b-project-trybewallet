// Esse reducer será responsável por tratar as informações da pessoa usuária
import { UPDATE_USERS } from '../actions';

const INICIAL_STATE = {
  email: '',
};

const user = (state = INICIAL_STATE, { type, payload }) => {
  switch (type) {
  case UPDATE_USERS:
    return {
      // ...state,
      email: payload,
    };
  default:
    return state;
  }
};

export default user;
