// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { ADD_EXPENSES, REQUEST, DELETE } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST:
    return {
      ...state,
      currencies: action.payload,
    };
  case ADD_EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, { ...action.payload }],
    };
  case DELETE:
    return {
      ...state,
      expenses: state.expenses.filter((id) => id.id !== action.payload),
    };
  default:
    return state;
  }
};

export default wallet;
