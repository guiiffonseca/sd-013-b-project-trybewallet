// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import {
  GET_CURRENCY_SUCCESS,
  GET_CURRENCY_ERROR,
  ADD_EXPENSE,
} from '../actions';

const INITIAL_STATE_WALLET = {
  currencies: [],
  id: 0,
  expenses: [],
};

function walletReducer(state = INITIAL_STATE_WALLET, action) {
  switch (action.type) {
  case GET_CURRENCY_SUCCESS:
    return {
      ...state,
      currencies: action.payload,
    };
  case GET_CURRENCY_ERROR:
    return {
      ...state,
      error: action.payload,
    };
  case ADD_EXPENSE:
    return {
      ...state,
      expenses:
      [...state.expenses, {
        ...action.payload,
        exchangeRates: state.currencies,
        id: state.id,
      }],
      id: state.id + 1,
    };
  default:
    return state;
  }
}

export default walletReducer;
