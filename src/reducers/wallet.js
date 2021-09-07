import { BUTTON_LOGIN } from '../actions';

const USER_WALLET = {
  user: {
    email: '',
  },
  wallet: {
    currencies: [],
    expenses: [],
  },
};

export default function userWalletReducer(state = USER_WALLET, action) {
  const { payload } = action;
  switch (action.type) {
  case BUTTON_LOGIN: return {
    ...state,
    user: {
      email: payload.email,
    },
  };
  default: return state;
  }
}
