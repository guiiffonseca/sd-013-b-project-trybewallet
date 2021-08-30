import { SET_USER_EMAIL } from '../actions';

const INITIAL_USER_STATE = {
  user: {
    email: '',
  },
};

const user = (state = INITIAL_USER_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
  case SET_USER_EMAIL:
    return { ...state, email: payload };
  default:
    return state;
  }
};

export default user;
