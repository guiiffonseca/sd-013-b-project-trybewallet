// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { ADD_EXPENSES, GET_COINS, REQUEST_API } from '../actions';

const INITTIAL_STATE = {
  isLoading: false,
  coins: [],
  expenses: [],
};

export default function wallet(state = INITTIAL_STATE, action) {
  switch (action.type) {
  case REQUEST_API:
    return {
      ...state,
      isLoading: true,
    };
  case GET_COINS:
    return {
      ...state,
      coins: action.data,
    };
  case ADD_EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  default:
    return state;
  }
}
