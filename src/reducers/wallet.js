import { GET_CURRENCIES, SET_EXPENSES } from '../actions/index';

const WALLET_INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = WALLET_INITIAL_STATE, action) => {
  switch (action.type) {
  case SET_EXPENSES:
    return { ...state, expenses: [...state.expenses, action.payload] };
  case GET_CURRENCIES:
    return { ...state, currencies: action.payload };

  default:
    return state;
  }
};

export default wallet;
