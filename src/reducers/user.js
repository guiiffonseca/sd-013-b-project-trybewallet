import { SET_LOGIN_EMAIL, SET_LOGIN_PASSWORD } from '../actions';

const INITIAL_STATE = {
  email: '',
  password: '',
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SET_LOGIN_EMAIL:
    return { ...state, email: action.payload };
  case SET_LOGIN_PASSWORD:
    return { ...state, password: action.payload };
  default:
    return state;
  }
};

export default userReducer;
