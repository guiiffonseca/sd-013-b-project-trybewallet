const INITIAL_STATE = {
  email: '',
};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'LOGIN':
    return {
      ...state,
      email: action.user.email,
    };
  default:
    return state;
  }
}

export default user;
