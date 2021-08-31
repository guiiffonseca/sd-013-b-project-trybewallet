const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'USUARIO':
    return state;
  default:
    return state;
  }
}

export default walletReducer;
