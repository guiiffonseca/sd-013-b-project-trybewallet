// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import actions from '../actions';

const INITIAL_STATE = {
  getWallet: {
  },
  error: null,
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case actions.GETWALLET:
    return action.payload;
  default:
    return state;
  }
};

export default walletReducer;
