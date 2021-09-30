import { ADD_EXPENSES } from '../actions/index';

const USER_WALLET = {
  currencies: ['BRL'],
  expenses: [],
};

export default function userWalletReducer(state = USER_WALLET, action) {
  const { payload } = action;
  switch (action.type) {
  case ADD_EXPENSES: return {
    ...state,
    currencies: payload.atualCurrency,
    expenses: [...state.expenses, payload.expenses],
  };
  default: return state;
  }
}
