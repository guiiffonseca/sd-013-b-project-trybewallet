const USER_WALLET = {
  user: {
    email: '',
  },
  wallet: {
    currencies: [],
    expenses: [],
  },
};

export default userWalletReducer = (state = USER_WALLET, action) => {
  switch (action.type) {
  case '': return {};
  default: return state;
  }
};
