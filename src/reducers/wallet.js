import { ACTIONS } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ACTIONS.CURRENCIES:
    return { ...state, currencies: action.payload };
  case ACTIONS.EXPENSES:
    return { ...state, expenses: [...state.expenses, action.payload] };
  default:
    return state;
  }
};

export default walletReducer;
