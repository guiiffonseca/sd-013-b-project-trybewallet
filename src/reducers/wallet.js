// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { ADD_CURRENCIES_ERROR, ADD_CURRENCIES_SUCCESS, ADD_EXPENSE } from '../actions';

const INICIAL_WALLET_STATE = {
  currencies: [],
  error: null,
  expenses: [],
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
      expenses: action.payload,
    };
  default:
    return state;
  }
};

export default wallet;
