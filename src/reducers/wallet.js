// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { GET_CURRENCY_SUCCESS, GET_CURRENCY_ERROR, ADD_EXPENSES } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_CURRENCY_SUCCESS:
    return { ...state, currencies: action.payload };
  case GET_CURRENCY_ERROR:
    return { ...state, currencies: null };
  case ADD_EXPENSES:
    return { ...state, expenses: [...state.expenses, action.payload] };
  default:
    return state;
  }
};

export default wallet;
