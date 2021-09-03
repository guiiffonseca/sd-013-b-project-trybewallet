import { COIN_SUCESS } from '../actions';

// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: {},
  expenses: [],
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case COIN_SUCESS:
    return ({ ...state, currencies: action.payload });
  default:
    return state;
  }
}

export default wallet;
