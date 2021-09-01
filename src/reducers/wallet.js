import { ADD_EXPENSES, GET_CURRENCIES } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, { ...action.payload, id: state.expenses.length }] };
  case GET_CURRENCIES:
    return { ...state, currencies: action.payload };
  default:
    return state;
  }
};

export default walletReducer;
