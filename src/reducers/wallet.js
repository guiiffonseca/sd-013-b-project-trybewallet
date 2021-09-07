// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { EXPENSE, LOAD_CURRENCIES } from '../actions';

const INITIAL_WALLET_STATE = {
  currencies: [],
  expenses: [],
};

function wallet(state = INITIAL_WALLET_STATE, action) {
  switch (action.type) {
  case EXPENSE:
    return { ...state, expenses: [...state.expenses, action.expense] };
  case LOAD_CURRENCIES:
    return { ...state, currencies: action.currencies };
  default:
    return state;
  }
}

export default wallet;
