import { SET_USERNAME } from '../actions/index';

const INITIAL_STATE = {
  email: '',
};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SET_USERNAME:
    return { ...state, email: action.payload };
  default:
    return state;
  }
}

export default user;
