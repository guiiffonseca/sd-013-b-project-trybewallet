import {
  ADD_EXPENSE,
  DELETE_EXPENSE,
  EDIT_EXPENSE,
  APPLY_EDDIT,
  ADD_CURRENCIES,
} from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_EXPENSE:
    action.expense.exchangeRates = action.exchangeRates;
    return { ...state, expenses: [...state.expenses, action.expense] };
  case DELETE_EXPENSE:
    return {
      ...state,
      expenses: state.expenses.filter((expense) => expense.id !== action.expenseId),
    };
  case EDIT_EXPENSE:
    return {
      ...state,
      editor: true,
      idToEdit: action.expenseId };
  case APPLY_EDDIT:
    return {
      ...state,
      editor: false,
      idToEdit: 0,
      expenses: state.expenses.map((expense) => {
        if (expense.id === action.object.id) {
          return { ...action.object, exchangeRates: expense.exchangeRate };
        }
        return expense;
      }),
    };
  case ADD_CURRENCIES:
    return { ...state, currencies: action.currencies };
  default: return state;
  }
};

export default wallet;
