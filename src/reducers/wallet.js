const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const walletReducer = (state = INITIAL_STATE, action) => {
  const { payload } = action;
  const { expenses } = state;
  switch (action.type) {
  case 'WALLET':
    expenses.push(payload);
    return {
      ...state,
      expenses,
    };
  default:
    return state;
  }
};

export default walletReducer;
