// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import {
  ADD_CURRENCIES_ERROR,
  ADD_CURRENCIES_SUCCESS,
  ADD_EXCHANGE_RATES_NOW,
  ADD_EXPENSE,
  DELETE_EXPENSE,
  EDIT_EXPENSE,
  UPDATE_EXPENSE_EDIT,
} from '../actions';

const INICIAL_WALLET_STATE = {
  currencies: [],
  error: null,
  expenses: [],
  expenseEdit: {
    editing: false,
    editingId: 999999999,
  },
  exchangeRatesNow: {},
};

const wallet = (state = INICIAL_WALLET_STATE, action) => {
  switch (action.type) {
  case ADD_CURRENCIES_SUCCESS:
    return { ...state, currencies: action.payload.currencies };
  case ADD_CURRENCIES_ERROR:
    return { ...state, error: action.payload.error };
  case ADD_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses, action.payload.expense],
    };
  case DELETE_EXPENSE:
    return {
      ...state,
      expenses: [
        ...state.expenses.filter((expense) => expense.id !== action.payload.id),
      ],
    };
  case EDIT_EXPENSE:
    return {
      ...state,
      expenses: [
        ...state.expenses
          .map((expense) => {
            if (expense.id === action.payload.id) {
              expense = action.payload;
            }
            return expense;
          }),
      ],
    };
  case ADD_EXCHANGE_RATES_NOW:
    return {
      ...state,
      exchangeRatesNow: action.payload.exchangeRatesNow,
    };
  case UPDATE_EXPENSE_EDIT:
    return { ...state, expenseEdit: action.payload };
  default:
    return state;
  }
};

export default wallet;
