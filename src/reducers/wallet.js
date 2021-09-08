const USER_WALLET = {
  currencies: ['BRL'],
  expenses: 0,
};

export default function userWalletReducer(state = USER_WALLET, action) {
  // const { payload } = action;
  switch (action.type) {
  case '': return {
    ...state,
  };
  default: return state;
  }
}
