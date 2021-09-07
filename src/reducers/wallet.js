// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { REQUEST_API_SUCCESS, REQUEST_ERROR, SET_EXPENSES } from '../actions/index';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function usersWalletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case REQUEST_API_SUCCESS:
    return {
      ...state, currencies: action.payload,
    };
  case REQUEST_ERROR:
    return {
      ...state, error: action.error,
    };
  case SET_EXPENSES:
    return {
      ...state, expenses: [...state.expenses, action.payload],
    };
  default:
    return state;
  }
}

export default usersWalletReducer;
