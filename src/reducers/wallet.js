import {
  SET_EXPENSES,
  GET_CURRENCY,
  GET_CURRENCY_SUCCESS,
  GET_CURRENCY_ERROR, DELETE_ITEM,
} from '../actions/index';

const INITIAL_STATE = {
  currencies: {},
  expenses: [],
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_CURRENCY:
    return { ...state,
      loading: true,
    };
  case SET_EXPENSES:
    return { ...state,
      expenses: action.payload,
    };
  case GET_CURRENCY_SUCCESS:
    return { ...state,
      currencies: [action.payload],
    };
  case GET_CURRENCY_ERROR:

    return { ...state,
      error: action.payload.error,
    };
  case DELETE_ITEM:
    return { ...state,
      expenses: state.expenses.filter((expense) => expense !== action.item) };
  default:
    return state;
  }
};
export default walletReducer;
