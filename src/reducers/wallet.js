// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'ADD_EXPENSES':
    return { ...state };
  case 'ADD_EXPENSES_SUCCESS':
    return {
      ...state,
      expenses: [...state.expenses, {
        ...action.payload,
      }],
    };

  case 'ADD_EXPENSES_ERROR':
    return { ...state, error: action.payload };
  default:
    return state;
  }
}

export default wallet;
