import { USER_MOEDA } from '../actions';

// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE_WALLET = {
  moedas: [],
};

function wallet(state = INITIAL_STATE_WALLET, action) {
  switch (action.type) {
  case USER_MOEDA:
    return { ...state, moedas: action.payload };
  default:
    return state;
  }
}

export default wallet;
