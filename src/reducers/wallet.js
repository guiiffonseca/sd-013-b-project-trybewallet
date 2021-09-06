import { USER_MOEDA, ADD_DESPESAS } from '../actions';

// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE_WALLET = {
  moedas: [],
  expenses: [],
};

function wallet(state = INITIAL_STATE_WALLET, action) {
  switch (action.type) {
  case USER_MOEDA:
    return { ...state, moedas: action.payload };
  case ADD_DESPESAS:
    return { ...state, expenses: [...state.expenses, action.payload] };
  default:
    return state;
  }
}

export default wallet;
