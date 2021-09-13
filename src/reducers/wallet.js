import { REQUEST_CURRENCIES, GET_CURRENCIES, FAILED_CURRENCIES } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  isFetching: false,
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_CURRENCIES:
    return { ...state, isFetching: true };
  case GET_CURRENCIES:
    return { ...state, currencies: action.payload, isFetching: false };
  case FAILED_CURRENCIES:
    return { ...state, error: action.payload, isFetching: false };
  default:
    return state;
  }
};

export default walletReducer;
