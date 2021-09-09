import { REQUEST_LOGIN, SET_EMAIL } from '../actions';

const INITIAL_STATE = {
  user: {
    email: '',
    isFetching: false,
  },
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_LOGIN:
    return { ...state, isFetching: true };
  case SET_EMAIL:
    return { ...state, user: action.payload, isFetching: false };
  // case SET_EMAIL:
  //   return { ...state, error: action.payload, isFetching: false };
  default:
    return state;
  }
};

export default userReducer;
