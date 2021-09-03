import { SET_USERS } from '../actions/index';

const INITIAL_STATE = {
  email: '',
};

const usersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SET_USERS:
    return { ...state,
      ...action.payload,
    };
  default:
    return state;
  }
};

export default usersReducer;
