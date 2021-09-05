const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'QUALQUER_COISA':
    return state;
  default:
    return state;
  }
}

export default walletReducer;
