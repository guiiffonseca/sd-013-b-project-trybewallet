import {
  SET_EXPENSES,
  GET_CURRENCY,
  GET_CURRENCY_SUCCESS,
  GET_CURRENCY_ERROR, DELETE_ITEM,
  RENDER_COINS,
} from '../actions/index';

const INITIAL_STATE = {
  currencies: {},
  expenses: [],
  coins: [],
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_CURRENCY:
    return { ...state,
    };
  case RENDER_COINS:
    return { ...state,
      coins: action.payload,
    };
  case SET_EXPENSES:
    return { ...state,
      expenses: [...state.expenses, action.payload],
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
