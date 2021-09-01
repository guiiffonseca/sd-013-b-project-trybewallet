import { EMAIL_ACTION } from '../actions';

const INITIAL_STATE = {
  user: {
    email: '',
  },
};

const updateEmail = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case EMAIL_ACTION:
    return {
      ...state,
      user: {
        email: action,
      },
    };
  default:
    return state;
  }
};

export default updateEmail;
