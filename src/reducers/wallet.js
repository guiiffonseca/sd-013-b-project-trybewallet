// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { WALLET_TYPE } from '../actions';

const INITIAL_STATE = {
  user: {
    email: '',
  },
  wallet: {
    currencies: [],
    expenses: [],
  },
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case WALLET_TYPE:
    return {
      [WALLET_TYPE]: action.payload,
    };
  default:
    return state;
  }
};

export default wallet;
