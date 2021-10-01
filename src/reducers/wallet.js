import { ADD_EXPENSES } from '../actions/index';

const USER_WALLET = {
  currencies: ['BRL'],
  expenses: [],
  totalField: 0,
};

export default function userWalletReducer(state = USER_WALLET, action) {
  const { payload } = action;
  switch (action.type) {
  case ADD_EXPENSES: return {
    ...state,
    currencies: payload.atualCurrency,
    expenses: [...state.expenses, payload.expenses],
    totalField: payload.atualField,
  };
  default: return state;
  }
}
