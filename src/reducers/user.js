// Esse reducer será responsável por tratar as informações da pessoa usuária

const INITIAL_STATE = {
  user: {
    email: '',
  },
  error: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'USER':
    return state + action.payload;
  default:
    return state;
  }
};

export default userReducer;
