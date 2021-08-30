// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { GET_CURRENCIES } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

export function currencies(state = INITIAL_STATE, action) {
  switch (action.type) {
  case GET_CURRENCIES:
    return { ...state,
      currencies: Object.keys(action.currencies)
        .filter((currency) => currency !== 'USDT') };
  default:
    return state;
  }
}

export default currencies;
