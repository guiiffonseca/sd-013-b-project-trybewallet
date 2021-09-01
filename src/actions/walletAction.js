import { GET_COINS_EXPENSES, VALUE_ALL } from './actionsType';

export const getCoinsExpenses = (payload) => ({
  type: GET_COINS_EXPENSES,
  payload,
});

export const valueAll = (payload) => ({
  type: VALUE_ALL,
  payload,
});

export default getCoinsExpenses;
