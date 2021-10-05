import { LOGIN } from '../actions/index';

const INIT_STATE = {
  email: '',
};

const userReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
  case LOGIN:
    return {
      ...state,
      email: action.payload.email,
      totalExpenses: action.payload.totalExpenses,
    };
  default:
    return state;
  }
};

export default userReducer;
