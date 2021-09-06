import { CURRENCIES, DELETE, EXPENSES } from '../actions';

const INNITIAL_STATE = {
  currencies: [],
  expenses: [],
};

export default function wallet(state = INNITIAL_STATE, action) {
  let arrayWithNewExpenseAdded = [];
  if (action.type === EXPENSES) {
    arrayWithNewExpenseAdded = [
      ...state.expenses,
      {
        id: state.expenses.length < 1
          ? 0 : state.expenses[state.expenses.length - 1].id + 1,
        value: action.expense[0],
        description: action.expense[1],
        currency: action.expense[2],
        method: action.expense[3],
        tag: action.expense[4],
        exchangeRates: {},
      },
    ];
  }

  switch (action.type) {
  case EXPENSES:
    return {
      ...state,
      expenses: arrayWithNewExpenseAdded,
    };
  case CURRENCIES:
    delete action.currencies.USDT;
    return {
      ...state,
      currencies: Object.keys(action.currencies),
      expenses: state.expenses.length > 0
        ? state.expenses.map(
          (expense) => ({
            ...expense,
            exchangeRates: action.currencies,
          }),
        )
        : [],
    };
  case DELETE:
    return {
      ...state,
      expenses: state.expenses.filter((expense) => expense.id !== action.id),
    };
  default:
    return state;
  }
}
