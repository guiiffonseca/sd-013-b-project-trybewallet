// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { ACTIONS } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ACTIONS.GET_CURRENCIES:
    return { ...state, currencies: action.payload };
  case ACTIONS.ADD_EXPENSE:
    return { ...state, expenses: [...state.expenses, action.payload] };
  case ACTIONS.REMOVE_EXPENSE:
    return {
      ...state,
      expenses: state.expenses.filter((expense) => expense.id !== action.payload),
    };
  default:
    return state;
  }
};

export default walletReducer;
