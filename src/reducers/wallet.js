import { SET_EXPENSES } from '../actions';
import { GET_CURRENCIES_SUCCESS } from '../actions';

const INITIAL_STATE = {
  expenses: 0,
  currencies: {},
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SET_EXPENSES:
    return {
      ...state,
      expenses: action.payload,
    };
  case GET_CURRENCIES_SUCCESS:
    return {
      ...state,
      currencies: action.payload,
    };
  default:
    return state;
  }
};

export default wallet;
