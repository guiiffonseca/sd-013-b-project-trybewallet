// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import {
  ADD_CURRENCIES_ERROR,
  ADD_CURRENCIES_SUCCESS,
  ADD_EXCHANGE_RATES_NOW,
  ADD_EXPENSE,
} from '../actions';

const INICIAL_WALLET_STATE = {
  currencies: [],
  error: null,
  expenses: [],
  exchangeRatesNow: {},
};

const wallet = (state = INICIAL_WALLET_STATE, action) => {
  switch (action.type) {
  case ADD_CURRENCIES_SUCCESS:
    return {
      ...state,
      currencies: action.payload.currencies,
    };
  case ADD_CURRENCIES_ERROR:
    return {
      ...state,
      error: action.payload.error,
    };
  case ADD_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses, action.payload.expense],
    };
  case ADD_EXCHANGE_RATES_NOW:
    return {
      ...state,
      exchangeRatesNow: action.payload.exchangeRatesNow,
    };
  default:
    return state;
  }
};

export default wallet;
