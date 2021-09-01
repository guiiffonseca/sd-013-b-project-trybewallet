import { SET_DESPESAS } from '../actions';

// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {

  currencies: [],
  expenses: [0],

};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SET_DESPESAS:
    return { ...state, expenses: [action.payload] };
  default:
    return state;
  }
}
export default wallet;
