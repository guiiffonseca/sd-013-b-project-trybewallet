const INITIAL_STATE = {
  user: {
    email: '',
  },
  error: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'USER':
    return ({ ...state, email: action.payload });
  default:
    return state;
  }
};

export default userReducer;
