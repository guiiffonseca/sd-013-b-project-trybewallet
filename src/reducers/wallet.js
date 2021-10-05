import { ADD_EXPENSES, REMOVE_VALOR } from '../actions/index';

const USER_WALLET = {
  currencies: ['BRL'],
  expenses: [],
};

export default function userWalletReducer(state = USER_WALLET, action) {
  const { payload } = action;
  switch (action.type) {
  case ADD_EXPENSES:
    return {
      ...state,
      currencies: payload.atualCurrency,
      expenses: [...state.expenses, payload.expenses],
    };
  case REMOVE_VALOR:
    return {
      ...state,
      expenses: [
        ...state.expenses.filter((result) => result.id !== Number(payload.expenses.id)),
      ],
    };
  default:
    return state;
  }
}
