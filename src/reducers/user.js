// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIAL_STATE = {
  user: {
    email: '',
  },
};

export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'LOGIN_EMAIL':
    return {
      user: {
        email: action.email,
      },
    };
  default:
    return state;
  }
}
