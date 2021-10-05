// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { CURRENCIES, EXPENSES_SUCESS, DELETE_EXPENSE } from '../actions/Index';

const ESTADO_INICIAL = {
  currencies: [],
  expenses: [],
};

const wallet = (state = ESTADO_INICIAL, action) => {
  switch (action.type) {
  case CURRENCIES:
    return { ...state, currencies: action.payload };
  case EXPENSES_SUCESS:
    return { ...state, expenses: action.payload };
  case DELETE_EXPENSE:
    return { ...state,
      expenses: state.expenses.filter((expense) => expense.id !== action.payload.id) };
  default:
    return state;
  }
};

export default wallet;
