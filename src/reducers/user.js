import { SET_USER } from '../actions';

const INITIAL_STATE = {
  email: '',
};

function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SET_USER:
    return { ...state, email: action.payload };
  default:
    return state;
  }
}

export default userReducer;
