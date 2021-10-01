import {
  SET_EXCHANGE_RATES_SUCCES,
  GET_CURRENCY_SUCCESS,
  UPDATE_EXPENSES_SUCCESS,
} from '../actions/index';

const INITIAL_STATE = {
  currencies: {},
  expenses: [],
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SET_EXCHANGE_RATES_SUCCES:
    return { ...state,
      expenses: action.payload,
    };
  case UPDATE_EXPENSES_SUCCESS:
    return { ...state,
      expenses: state.expenses.filter((e) => e.id !== action.payload.id),
    };
  case GET_CURRENCY_SUCCESS:
    return { ...state,
      currencies: action.payload,
    };
  default:
    return state;
  }
};

export default walletReducer;
