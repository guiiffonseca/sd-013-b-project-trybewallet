// Esse reducer será responsável por tratar as informações da pessoa usuária
import actions from '../actions/index';

const INITIAL_STATE = {
  email: '',
};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case actions.LOGIN_EMAIL:
    return { ...state, email: action.payload };
  default:
    return state;
  }
}

export default user;
