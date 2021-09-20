import { ALL_ACTIONS } from '../actions';

const INITIAL_STATE = {
  value: 0,
  description: '',
  currency: 'USD',
  method: 'Dinheiro',
  tag: 'Alimentação',
  exchangeRates: {},
};

const expense = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
  case ALL_ACTIONS.SET_VALUE:
    return {
      ...state,
      value: payload,
    };
  case ALL_ACTIONS.SET_DESCRIPTION:
    return {
      ...state,
      description: payload,
    };
  case ALL_ACTIONS.SET_CURRENCY:
    return {
      ...state,
      currency: payload,
    };
  case ALL_ACTIONS.SET_PAYMENT:
    return {
      ...state,
      method: payload,
    };
  case ALL_ACTIONS.SET_TAG:
    return {
      ...state,
      tag: payload,
    };
  case ALL_ACTIONS.SET_EXCHANGERATES:
    return {
      ...state,
      exchangeRates: payload,
    };
  case ALL_ACTIONS.SET_EXPENSE_DEFAULT:
    return INITIAL_STATE;
  default:
    return state;
  }
};

export default expense;
