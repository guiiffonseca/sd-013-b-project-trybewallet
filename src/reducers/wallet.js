// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import { SET_CURRENCIES, SET_EXCHANGE_RATES, SET_EXPENSE } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  exchangeRates: {},
};

export default function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SET_CURRENCIES:
    return { ...state, currencies: action.payload };
  case SET_EXCHANGE_RATES:
    return { ...state, exchangeRates: { ...action.payload } };
  case SET_EXPENSE:
    return { ...state, expenses: [...state.expenses, action.payload] };
  default:
    return state;
  }
}
