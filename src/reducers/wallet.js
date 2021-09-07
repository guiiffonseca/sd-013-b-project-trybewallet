import { ADD_CURRENCIES, ADD_EXPENSES } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_CURRENCIES:
    return ({
      ...state,
      currencies: action.currencie,
    });
  case ADD_EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, { ...action.payload, id: state.expenses.length }] };
  default:
    return state;
  }
};

export default wallet;
