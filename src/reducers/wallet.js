const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'SET_EXPENSES':
    return {
      ...state,
      expenses: [
        ...state.expenses,
        action.state,
      ],
    };
  default:
    return state;
  }
};

export default wallet;
