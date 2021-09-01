const INITIAL_STATE = {
  email: '',
};

const USER_EMAIL = 'USER_EMAIL';

const userInput = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case USER_EMAIL:
    return {
      ...state,
      email: action.payload,
    };
  default:
    return state;
  }
};

export default userInput;
