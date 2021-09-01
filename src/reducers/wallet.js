// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import {
  GET_ALL_CURRENCIES,
  REQUEST_CURRENCIES,
  FAILED_REQUEST,
  // GET_UNIQUE_CURRENCY,
  // REQUEST_UNIQUE_CURRENCY,
  SET_WALLET_VALUE,
} from '../actions/index';

const initialState = {
  currencies: [],
  expenses: [
    // id: '',
    // value: '',
    // description: '',
    // currency: '',
    // method: '',
    // tag: '',
    // exchangeRates: {},
  ],
  isFetching: false,
  error: '',
};

const wallet = (state = initialState, action) => {
  switch (action.type) {
  case SET_WALLET_VALUE:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  case GET_ALL_CURRENCIES:
    return { ...state, currencies: action.payload, isFetching: false };
  // case GET_UNIQUE_CURRENCY:
  //   return { ...state, expenses: [...state.expenses, action.payload], isFetching: false };
  // case REQUEST_UNIQUE_CURRENCY:
  //   return { ...state, isFetching: true };
  case REQUEST_CURRENCIES:
    return { ...state, isFetching: true };
  case FAILED_REQUEST:
    return { ...state, error: action.payload, isFetching: false };
  default:
    return state;
  }
};

export default wallet;
