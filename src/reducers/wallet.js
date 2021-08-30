import { SET_EXPENSIVE, SET_CURRENCIES } from '../actions';

const INITIAL_WALLET_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_WALLET_STATE, action) => {
  const { expenses } = state;
  const { type, payload } = action;
  switch (type) {
  case SET_EXPENSIVE:
    return {
      ...state,
      expenses: [...expenses.concat({ ...payload, id: expenses.length })],
    };

  case SET_CURRENCIES:
    return { ...state, currencies: payload };
  default:
    return state;
  }
};

export default wallet;
