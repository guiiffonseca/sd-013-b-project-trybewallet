// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { SET_WALLET_VALUE, GET_API_SUCCESS } from '../actions/index';

const initialState = {
  wallet: {
    currencies: [],
    expenses: [],
  },
};

const reducerWallet = (state = initialState, action) => {
  switch (action.type) {
  case SET_WALLET_VALUE:
    return {
      ...state,
      wallet: {
        ...state.wallet,
        expenses: [action.payload.wallet.expenses] },
    };
  case GET_API_SUCCESS:
    return {
      ...state,
      wallet: {
        ...state.wallet,
        currencies: [action.payload.currencies] },
    };
  default:
    return state;
  }
};

export default reducerWallet;
