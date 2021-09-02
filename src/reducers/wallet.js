import {
  CURRENCIES_REQUEST,
  CURRENCIES_REQUEST_SUCCESS,
  CURRENCIES_REQUEST_ERROR,
} from '../actions';

const INITIAL_STATE = {
  isLoading: false,
  currencies: [],
};

export default function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case CURRENCIES_REQUEST:
    return { ...state, isloading: true };
  case CURRENCIES_REQUEST_SUCCESS:
    return { ...state, isloading: false, currencies: action.currencies };
  case CURRENCIES_REQUEST_ERROR:
    return { ...state, isloading: false, error: action.error };
  default:
    return state;
  }
}
