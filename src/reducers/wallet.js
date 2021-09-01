import { ADD_EXPENSE, CURRENCY, DELETE_EXPENSE } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case CURRENCY:
    return { ...state, currencies: [action.currencies] };
  case ADD_EXPENSE:
    return { ...state, expenses: [...state.expenses, action.infos] };
  case DELETE_EXPENSE:
    return { ...state, expenses: [...action.expenses] };
  default:
    return state;
  }
}

export default wallet;
