// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { ADD_EXPENSE, LOAD_CURRENCIES } from '../actions';

/**
 * expense: {
        id: 0,
        value: '10',
        currency: 'USD',
        method: 'Cartão de crédito',
        tag: 'Lazer',
        description: 'Dez dólares',
        exchangeRates: {
          "USD": {
              "code": "USD",
              "codein": "BRL",
              "name": "Dólar Americano/Real Brasileiro",
              "high": "5.1867",
              "low": "5.1864",
              "varBid": "0.0006",
              "pctChange": "0.01",
              "bid": "5.1849",
              "ask": "5.1879",
              "timestamp": "1630530000",
              "create_date": "2021-09-01 18:00:00"
          },
          "USDT": {...
      }
 */

const INITIAL_WALLET_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_WALLET_STATE, action) => {
  switch (action.type) {
  case ADD_EXPENSE:
    return { ...state, expenses: [...state.expenses, action.expense] };
  case LOAD_CURRENCIES:
    return { ...state, currencies: action.currencies };
  default:
    return state;
  }
};

export default wallet;
