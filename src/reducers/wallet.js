import { SET_EXPENSES, SET_CURRENCIES } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
  case SET_EXPENSES:
    return { ...state, expenses: [...state.expenses, payload] };
  case SET_CURRENCIES:
    return { ...state, currencies: payload };
  default:
    return state;
  }
};

export default wallet;
