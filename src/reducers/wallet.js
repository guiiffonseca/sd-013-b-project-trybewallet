// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { GET_CURRENCY, EXPENSES_DATA } from '../actions/index';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case GET_CURRENCY:
    return {
      ...state,
      currencies: action.payload,
    };
  case EXPENSES_DATA:
    return {
      ...state,
      expenses: [...state.expenses, {
        ...action.payload,
        id: state.expenses.length,
      }],
    };
  // case GET_EXCHANGE_RATES:
  //   return {
  //     ...state,
  //     exchangeRates: action.payload,
  //   };
    default:
    return state;
  }
}

export default wallet;
