import { SET_EXPENSES } from '../actions';

const INITIAL_STATE = {
  wallet: {
    currencies: [],
    expenses: [],
  },
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SET_EXPENSES:
    return { ...state, expenses: action.payload };
  // case SET_CURRENCIES:
  //   return { ...state, currencies: action.payload };
  default:
    return state;
  }
};

export default wallet;
