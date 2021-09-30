import { SET_EXPENSES, SUM_EXPENSES, GET_CURRENCIES } from '../actions';

const INITIAL_STATE = {
  expenses: [],
  currencies: {},
  summation: 0,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SET_EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  case SUM_EXPENSES:
    return {
      ...state,
      summation: state.summation + action.payload,
    };
  case GET_CURRENCIES:
    return {
      ...state,
      currencies: action.payload,
    };
  default:
    return state;
  }
};

export default wallet;
