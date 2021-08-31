// Esse reducer será responsável por tratar as informações da pessoa usuária
import { LOGIN } from '../actions/index';

export const DEFAULT_STATE = {
  user: {
    email: '',
  },
};

function amarelo(state = DEFAULT_STATE, action) {
  switch (action.type) {
  case LOGIN:
    return { ...state, ...action.payload };

  default:
    return state;
  }
}

export default amarelo;
