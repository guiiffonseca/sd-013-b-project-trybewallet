import { BUTTON_LOGIN } from '../actions/index';

const USER_LOGIN = {
  email: 'alguem@gmail.com',
  password: '',
};

const userLoginReducer = (state = USER_LOGIN, action) => {
  const { payload } = action;
  switch (action.type) {
  case BUTTON_LOGIN:
    return {
      ...state,
      email: payload.email,
      password: payload.password,
    };
  default:
    return state;
  }
};

export default userLoginReducer;
