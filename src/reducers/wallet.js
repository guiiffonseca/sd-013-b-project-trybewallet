// Esse reducer será responsável por tratar as informações da pessoa usuária
import { GET_COINS, GET_COINS_ERROR, GET_COINS_SUCCESS } from '../actions/actionsType';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  error: null,
  isLoading: false,
};

const WalletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_COINS:
    return { ...state, isLoading: true };
  case GET_COINS_SUCCESS:
    return { ...state, error: null, currencies: action.payload, isLoading: false };
  case GET_COINS_ERROR:
    return { ...state, error: action.error, isLoading: false };
  default:
    return state;
  }
};

export default WalletReducer;
