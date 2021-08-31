// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { DELETE_EXPENSE, GET_CURRENCIES, SEND_EXPENSES } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

export function currencies(state = INITIAL_STATE, action) {
  switch (action.type) {
  case GET_CURRENCIES:
    return { ...state,
      currencies: Object.keys(action.currencies)
        .filter((currency) => currency !== 'USDT'),
    };
  case SEND_EXPENSES:
    return { ...state,
      expenses: [...state.expenses,
        Object.assign(action.expense, action.exchangeRates)] };
  case DELETE_EXPENSE:
    return { ...state,
      expenses: [...state.expenses
        .filter((expense) => expense.id !== action.id)] };
  default:
    return state;
  }
}

export default currencies;
