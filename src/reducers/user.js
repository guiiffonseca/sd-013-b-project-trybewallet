import { BUTTON_LOGIN } from '../actions/index';

const USER_LOGIN = {
  email: '',
  password: '',
};

export default userLoginReducer = (state = USER_LOGIN, action) => {
  switch (action.type) {
  case BUTTON_LOGIN:
    return { };
  default:
    return state;
  }
};
