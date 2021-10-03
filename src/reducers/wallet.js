import { SET_DESPESAS, EXCLUIR_DESPESAS } from '../actions';

// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
// Referenc do desse reducer em Mentoria Técnicas no zoon
const INITIAL_STATE = {

  currencies: [],
  expenses: [],

};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SET_DESPESAS:
    return { ...state,
      expenses: [...state.expenses, action.payload] };
  case EXCLUIR_DESPESAS:
    return { ...state, expenses: [...action.payload] };
  default:
    return state;
  }
}
export default wallet;
