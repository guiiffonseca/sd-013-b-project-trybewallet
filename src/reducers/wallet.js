import { ADD_EXPENSES, REMOVE_EXPENSES } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function saveWalletInfo(state = INITIAL_STATE, action) {
  switch (action.type) {
  case ADD_EXPENSES:
    return { ...state,
      expenses: [...state.expenses, action.payload.expenses],
      currencies: action.payload.currencies };
  case REMOVE_EXPENSES:
    return { ...state,
      expenses: state.expenses.filter(
        (expense) => expense.id !== action.payload.expenses,
      ),
    };
  default:
    return state;
  }
}

export default saveWalletInfo;
