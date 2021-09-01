const INITIAL_STATE = {
  user: '',
};

function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'QUALQUER_COISA':
    return state;
  default:
    return state;
  }
}

export default userReducer;
