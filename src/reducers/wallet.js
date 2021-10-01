import {
  REQUEST_CURRENCIES,
  GET_CURRENCIES,
  FAILED_CURRENCIES,
  REQUEST_EXCHANGE,
  GET_EXCHANGE,
  FAILED_EXCHANGE,
  SET_EXPENSES,
} from '../actions';

const INITIAL_STATE = {
  currencies: [],
  isFetching: false,
  error: null,
  expenses: [],
  exchangeRates: {},
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_CURRENCIES:
    return { ...state, isFetching: true };
  case GET_CURRENCIES:
    return { ...state, currencies: action.payload, isFetching: false };
  case FAILED_CURRENCIES:
    return { ...state, error: action.payload, isFetching: false };
  case SET_EXPENSES:
    return { ...state, expenses: [...state.expenses, action.payload] };
  case REQUEST_EXCHANGE:
    return { ...state, isFetching: true };
  case GET_EXCHANGE:
    console.log(action.payload);
    return { ...state, exchangeRates: action.payload, isFetching: false };
    // return { ...state, expenses: { ...state.expenses, teste: action.payload }, isFetching: false };
  case FAILED_EXCHANGE:
    return { ...state, error: action.payload, isFetching: false };
  default:
    return state;
  }
};

export default walletReducer;
