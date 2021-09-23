import { SET_EXPENSES, GET_CURRENCIES } from '../actions';

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
  case GET_CURRENCIES:
    return {
      ...state,
      currencies: action.currencies,
    };
  default:
    return state;
  }
};

export default wallet;
