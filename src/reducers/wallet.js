// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import {
  RECEIVE_CURRENCIES, ADD_EXPENSE, DELETE_EXPENSE, EDIT_EXPENSE, PREPARE_EDIT_EXPENSE,
} from '../actions';

const INITIAL_STATE = {
  editor: false,
  idToEdit: 0,
  currencies: [],
  expenses: [],
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_EXPENSE:
    return {
      ...state,
      expenses: [
        ...state.expenses,
        action.payload,
      ],
    };
  case DELETE_EXPENSE:
    return {
      ...state,
      expenses: state.expenses.filter(({ id }) => id !== action.payload),
    };
  case EDIT_EXPENSE:
    return {
      ...state,
      editor: false,
      expenses: state.expenses
        .map((expense) => (expense.id === action.payload.id ? action.payload : expense)),
    };
  case RECEIVE_CURRENCIES:
    return {
      ...state,
      currencies: action.payload,
    };
  case PREPARE_EDIT_EXPENSE:
    return {
      ...state,
      editor: true,
      idToEdit: action.payload,
    };
  default:
    return state;
  }
};

export default walletReducer;
