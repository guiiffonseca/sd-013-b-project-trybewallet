// Esse reducer será responsável por tratar as informações da pessoa usuária
import { SET_USER } from '../actions/index';

const INITIAL_STATE_USER = {
  user: '',
  password: '',
};

function userReducer(state = INITIAL_STATE_USER, action) {
  switch (action.type) {
  case SET_USER:
    return {
      state,
    };
  default:
    return state;
  }
}

export default userReducer;
