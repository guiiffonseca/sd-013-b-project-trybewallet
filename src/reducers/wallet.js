// Esse reducer será responsável por tratar o todas as 
// informações relacionadas as despesas
// Esse reducer será responsável por tratar as informações
//  da pessoa usuária
//importar loadin saved money  error 
import { ADD_EXPENSES } from '../actions';

const WALLET_INITIAL_STATE = {
  state: '',
  currencies: [],
  expenses: [],
};

const wallet = (state = WALLET_INITIAL_STATE, action) => {
  switch (action.type) {
  case 'LOADING':
    return { ...state, loading: true };
  case 'SAVED_MONEY':
    return { ...state, currencies: action.payload };
  case 'ERROR':
    return { ...state, error: action.payload };
  case ADD_EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, {
        ...action.payload,
        id: state.expenses.length,
      }] };
  default:
    return state;
  }
};

export default wallet;
