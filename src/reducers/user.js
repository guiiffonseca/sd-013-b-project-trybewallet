// Esse reducer será responsável por tratar as informações da pessoa usuária

const LOGIN = 'LOGIN';

const INITIAL_STATE = {
  email: '',
};

function userReducer(state = INITIAL_STATE, action) {
  const { type, payload } = action;
  switch (type) {
  case LOGIN:
    return {
      ...state,
      email: payload.email,
    };
  default:
    return state;
  }
}

export default userReducer;
