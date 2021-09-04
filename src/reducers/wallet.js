import { GET_CURRENCIES, GET_EXPENSES, GET_NEW_EXPENSES } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function wallet(state = INITIAL_STATE, action) {
  const { type, currencies, newExpenses, newArrayExpenses } = action;
  switch (type) {
  case GET_CURRENCIES:
    return {
      ...state,
      currencies,
    };
  case GET_EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, newExpenses],
    };
  case GET_NEW_EXPENSES:
    return {
      ...state,
      expenses: newArrayExpenses,
    };
  default:
    return state;
  }
}
export default wallet;
