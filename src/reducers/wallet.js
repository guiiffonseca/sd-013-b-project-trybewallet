import { SET_CURRENCIES, SET_EXPENSES, UPDATE_EXPENSES } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SET_CURRENCIES:
    return { ...state, currencies: action.payload };
  case SET_EXPENSES:
    return { ...state, expenses: [...state.expenses, action.payload] };
  case UPDATE_EXPENSES:
    return { ...state, expenses: [...action.payload] };
  default:
    return state;
  }
}

export default walletReducer;
