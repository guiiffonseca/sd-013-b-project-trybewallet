const LOGIN = 'LOGIN';
const GET_CURRENCIES = 'GET_CURRENCIES';

const INITIAL_STATE = {
  email: '',
  moedas: [],
};

function userReducer(state = INITIAL_STATE, action) {
  const { type, payload } = action;
  switch (type) {
  case LOGIN:
    return {
      ...state,
      email: payload.email,
    };
  case GET_CURRENCIES:
    return {
      ...state,
      moedas: payload.moedas,
    };
  default:
    return state;
  }
}

export default userReducer;
