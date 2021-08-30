import actions from '../actions';

const INICIAL_STATE = {
  currencies: [],
  expenses: [],
  totalExpenses: 0,
};

const walletReduce = (state = INICIAL_STATE, action) => {
  switch (action.type) {
  case actions.walletCurrencies:
    return { ...state, wallet: { currencies: action.payload } };
  default:
    return state;
  }
};

export default walletReduce;
