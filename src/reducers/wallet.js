import actions from '../actions';

const INICIAL_STATE = {
  wallet: {
    currencies: [],
    expenses: [],
  },
};

const walletReduce = () => {
  console.log(INICIAL_STATE);
};
/*
const walletReduce = (state = INICIAL_STATE, action) => {
  switch (action.type) {
  case actions.walletCurrencies:
    return { ...state, wallet: { currencies: action.payload } };
  default:
    return state;
  }
};
*/
export default walletReduce;
