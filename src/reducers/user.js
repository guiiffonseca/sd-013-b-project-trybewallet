// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'QUALQUER_COISA':
    return state;
  default:
    return state;
  }
}

export default user;
