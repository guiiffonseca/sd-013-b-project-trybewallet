// lembrar de importar as actions type para cada reducer
import {
  SET_EXPENSES,
  GET_CURRENCIES,
  GET_CURRENCIES_SUCCESS,
  GET_EXCHANGES,
  GET_EXCHANGES_SUCCESS,
  GET_AMOUNT,
} from '../actions';

const WALLET_INITIAL_STATE = {
  currencies: [],
  expenses: [],
  isLoading: false,
  error: null,
  amount: [],
};

const setWallet = (state = WALLET_INITIAL_STATE, action) => {
  switch (action.type) {
  case SET_EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  case GET_CURRENCIES:
    return { ...state, isLoading: true };
  case GET_CURRENCIES_SUCCESS:
    return {
      ...state,
      isLoading: false,
      currencies: action.payload,
    };
  case GET_EXCHANGES:
    return { ...state, isLoading: true };
  case GET_EXCHANGES_SUCCESS:
    return {
      ...state,
      isLoading: false,
      exchangeRates: action.payload,
    };
  case GET_AMOUNT:
    return {
      ...state, amount: action.payload,
    };
  default:
    return state;
  }
};
export default setWallet;
