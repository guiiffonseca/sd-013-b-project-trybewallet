// Esse reducer será responsável por tratar as informações da pessoa usuária
import { SET_USEREMAIL } from '../actions';

const INITIAL_STATE = {
  email: '',
};

function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SET_USEREMAIL:
    return { ...state, email: action.payload };
  default:
    return state;
  }
}

export default userReducer;
