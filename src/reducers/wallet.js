// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { SET_CURRENCIES, SET_EXPENSES } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function wallet(state = INITIAL_STATE, action) {
  const { type, currencies, newExpenses } = action;
  switch (type) {
  case SET_CURRENCIES:
    return {
      ...state,
      currencies,
    };
  case SET_EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, newExpenses],
    };
  default:
    return state;
  }
}

export default wallet;
