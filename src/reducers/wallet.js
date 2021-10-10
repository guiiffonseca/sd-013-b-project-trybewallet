import {
  REQUEST_FETCH,
  FAILED_FETCH,
  GET_CURRENCIES,
  SET_EXPENSES,
  DELETE_EXPENSE,
  EDIT_EXPENSE,
  UPDATE_EXPENSE,
} from '../actions';

const INITIAL_STATE = {
  currencies: [],
  error: null,
  expenseId: 0,
  editExpense: false,
  expenses: [],
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_FETCH:
    return { ...state };

  case FAILED_FETCH:
    return { ...state, error: action.payload };

  case GET_CURRENCIES:
    return { ...state, currencies: action.payload };

  // Elaborado com a ajuda de Rodrigo Augusto (Tribo 13B)
  case SET_EXPENSES:
    return { ...state,
      expenses: [...state.expenses, {
        ...action.payload,
        id: state.expenses.length,
      }],
      editExpense: false,
    };

  case DELETE_EXPENSE:
    return { ...state, expenses: action.payload };

  case EDIT_EXPENSE:
    return { ...state, expenseId: action.payload, editExpense: true };

  // Refer: https://qastack.com.br/programming/35628774/how-to-update-single-value-inside-specific-array-item-in-redux
  case UPDATE_EXPENSE:
    return { ...state,
      expenses: state.expenses.map((item) => (item.id === action.payload.id
        ? { ...action.payload }
        : item
      )),
      editExpense: false,
    };

  default:
    return state;
  }
};

export default walletReducer;
