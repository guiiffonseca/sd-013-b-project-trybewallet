// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { GET_WALLET } from '../actions';

const INITIAL_STATE = {
  wallet: {
    currencies: [],
    expenses: [],
  },
};

function wallet(state = INITIAL_STATE, action) {
  const { type, payload } = action;
  switch (type) {
  case GET_WALLET:
    return {
      ...state,
      payload,
    };
  default:
    return state;
  }
}

export default wallet;
