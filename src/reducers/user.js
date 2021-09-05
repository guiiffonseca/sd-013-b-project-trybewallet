import { LOGIN_SUBMIT } from '../actions/index';

const INITIAL_STATE = {
  email: '',
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case LOGIN_SUBMIT:
    return { ...state, email: action.payload };
  default:
    return state;
  }
};

export default user;
