import {
  SET_CURRENCIES, SET_EDIT_OPTIONS, SET_EXPENSES, UPDATE_EXPENSES,
} from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  isToEditExpense: false,
  expenseIndex: -1,
};

function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SET_CURRENCIES:
    return { ...state, currencies: action.payload };
  case SET_EXPENSES:
    return { ...state, expenses: [...state.expenses, action.payload] };
  case UPDATE_EXPENSES:
    return { ...state, expenses: [...action.payload] };
  case SET_EDIT_OPTIONS:
    return { ...state, ...action.payload };
  default:
    return state;
  }
}

export default walletReducer;
