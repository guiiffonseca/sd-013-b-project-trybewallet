// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { SET_CURRENCIES, REQUEST_API } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  isFetching: false,
  expenses: [],

};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_API:
    return { ...state, isFetching: true };
  case SET_CURRENCIES:
    return { ...state, currencies: action.payload, isFetching: false };
  default:
    return state;
  }
};

export default wallet;
