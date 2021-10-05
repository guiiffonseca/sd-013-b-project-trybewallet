const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  totalValue: 0,
};

function addToTotal(state) {
  let total = 0;
  state.expenses.forEach((expense) => {
    total += parseFloat(expense.value) * parseFloat(expense
      .exchangeRates[expense.currency].ask) || 0;
  });
  // total += parseFloat(action.payload.value) * parseFloat(action.payload
  //   .exchangeRates[action.payload.currency].ask);
  return total;
}

const walletReducer = (state = INITIAL_STATE, action) => {
  const { payload } = action;
  const { expenses } = state;
  switch (action.type) {
  case 'WALLET':
    expenses.push(payload);
    return {
      ...state,
      expenses,
      totalValue: addToTotal(state),
    };
  case 'UPDATE_EXPENSES':
    return { ...state,
      expenses: payload,
      totalValue: addToTotal({ expenses: payload }),
    };

  default:
    return state;
  }
};

export default walletReducer;
