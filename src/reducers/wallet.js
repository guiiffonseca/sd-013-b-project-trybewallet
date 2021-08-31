const INITIAL_STATE = {
  expenses: [],
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'ADD_EXPENSE':
    return { ...state, expenses: [...state.expenses, action.payload] };
  case 'REMOVE_EXPENSE':
    return {
      ...state,
      expenses: state.expenses.filter((el) => el.id !== action.payload.id),
    };
  default:
    return state;
  }
};

export default walletReducer;
