import LOGIN_OK from '../actions/types';

const reducerLogin = (state = {}, action) => {
  switch (action.type) {
  case LOGIN_OK:
    return state;
  default:
    return state;
  }
};

export default reducerLogin;
