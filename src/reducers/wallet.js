// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
export const INITIAL_STATE = {
  wallet: {
    currencies: [],
    expenses: [],
  },
};

export default function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case INITIAL_STATE:
    return state;
  default:
    return state;
  }
}
