// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { SET_CURRENCIES, REQUEST_API, GET_EXPENSES } from '../actions';

const INITIAL_STATE = {
  isFetching: false,
  currencies: [],
  expenses: [],

};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_API:
    return { ...state, isFetching: true };
  case SET_CURRENCIES:
    return { ...state, currencies: action.payload, isFetching: false };
  case GET_EXPENSES:
    return { ...state, expenses: [...state.expenses, action.payload], isFetching: false };
  default:
    return state;
  }
};

export default wallet;
