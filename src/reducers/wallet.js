import {
  REQUEST_CURRENCIES,
  GET_CURRENCIES,
  FAILED_CURRENCIES,
  REQUEST_EXCHANGE,
  SET_EXPENSES,
  FAILED_EXCHANGE,
  REMOVE_EXPENSE,
} from '../actions';

const INITIAL_STATE = {
  currencies: [],
  error: null,
  expenses: [],
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_CURRENCIES:
    return { ...state };
  case GET_CURRENCIES:
    return { ...state, currencies: action.payload };
  case FAILED_CURRENCIES:
    return { ...state, error: action.payload };

  case REQUEST_EXCHANGE:
    return { ...state };
  // Elaborado com a ajuda de Rodrigo Agusto (Tribo 13B)
  case SET_EXPENSES:
    return { ...state,
      expenses: [...state.expenses, {
        ...action.payload,
        id: state.expenses.length,
      }],
    };
  case FAILED_EXCHANGE:
    return { ...state, error: action.payload };

  case REMOVE_EXPENSE:

    return { ...state, expenses: action.payload };

  default:
    return state;
  }
};

export default walletReducer;
