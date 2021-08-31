// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { GET_ALL_CURRENCIES, REQUEST_CURRENCIES, FAILED_REQUEST } from '../actions/index';

const initialState = {
  currencies: [],
  expenses: [],
  isFetching: false,
  error: '',
};

const wallet = (state = initialState, action) => {
  switch (action.type) {
  case GET_ALL_CURRENCIES:
    return { ...state, currencies: action.payload, isFetching: false };
  case REQUEST_CURRENCIES:
    return { ...state, isFetching: true };
  case FAILED_REQUEST:
    return { ...state, error: action.payload, isFetching: false };
  default:
    return state;
  }
};

export default wallet;
