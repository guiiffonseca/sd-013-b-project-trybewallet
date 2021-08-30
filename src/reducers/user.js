// Esse reducer será responsável por tratar as informações da pessoa usuária
import { GET_EMAIL } from '../actions';

const INITIAL_STATE = {
  user: {
    email: '',
  },
};

function user(state = INITIAL_STATE, action) {
  const { type, payload } = action;
  switch (type) {
  case GET_EMAIL:
    return {
      ...state,
      user: { email: payload },
    };
  default:
    return state;
  }
}

export default user;
