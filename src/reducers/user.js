// Esse reducer será responsável por tratar as informações da pessoa usuária

import ACTIONS from '../actions/index';

const INITIAL_STATE = {
  email: '',
};

function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case ACTIONS.SAVE_EMAIL:
    return { ...state, email: action.email };
  default:
    return state;
  }
}

export default userReducer;
