import { BUTTON_LOGIN } from '../actions/index';

const USER_LOGIN = {
  userLogin: {
    email: '',
    password: '',
  },

};

const userLoginReducer = (state = USER_LOGIN, action) => {
  const { payload } = action;
  switch (action.type) {
  case BUTTON_LOGIN:
    return {
      ...state,
      userLogin: {
        email: payload.email,
        password: payload.password,
      },
    };
  default:
    return state;
  }
};

export default userLoginReducer;
