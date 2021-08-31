const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'SAVE_EXPENSES':
    return {
      ...state,
      expenses: [
        ...state.expenses,
        action.state,
      ],
    };
  case 'GET_CURRENCY':
    return {
      ...state,
      currencies: [...action.state],
    };
  default:
    return state;
  }
};

export default wallet;
