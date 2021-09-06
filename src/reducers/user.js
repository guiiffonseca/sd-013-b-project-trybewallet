import { BUTTON_LOGIN } from '../actions/index';

const USER_LOGIN = {
  email: '',
  password: '',
};

const userLoginReducer = (state = USER_LOGIN, action) => {
  switch (action.type) {
  case BUTTON_LOGIN:
    return { };
  default:
    return state;
  }
};

export default userLoginReducer;
