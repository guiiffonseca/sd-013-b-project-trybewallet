// lembrar de importar as actions type para cada reducer
import {
  GET_CURRENCIES,
  GET_CURRENCIES_SUCCESS,
  GET_CURRENCIES_ERROR,
} from '../actions';

const WALLET_INITIAL_STATE = {
  currencies: [],
  expenses: [],
  isLoading: false,
  error: null,
};

const setWallet = (state = WALLET_INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_CURRENCIES:
    return { ...state, isLoading: true };
  case GET_CURRENCIES_SUCCESS:
    return { ...state, isLoading: false, currencies: action.payload };
  case GET_CURRENCIES_ERROR:
    return { ...state, isLoading: false, error: action.payload };
  default:
    return state;
  }
};
export default setWallet;
