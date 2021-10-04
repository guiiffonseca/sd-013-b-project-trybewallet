import {
  SET_EXPENSES,
  GET_CURRENCY,
  GET_CURRENCY_SUCCESS,
  GET_CURRENCY_ERROR,
} from '../actions/index';

const INITIAL_STATE = {
  currencies: {},
  expenses: [],
  arrayCurrency: [],
  error: null,
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
  default:
    return state;
  }
};
export default walletReducer;
