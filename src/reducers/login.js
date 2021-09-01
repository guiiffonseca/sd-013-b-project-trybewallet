import LOGIN_OK from '../actions/types';

const initialState = { email: '' };

const reducerLogin = (state = initialState, action) => {
  switch (action.type) {
  case LOGIN_OK:
    return {
      ...state,
      email: action.payload,
    };
  default:
    return state;
  }
};

export default reducerLogin;
