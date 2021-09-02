// Coloque aqui suas actions

import fetchMoedas from '../services';

export const enter = (email) => ({ type: 'USER', email });

const addCurrencies = (currencies) => ({ type: 'CURRENCIES', currencies });

export const addExpenses = (expenses) => ({ type: 'EXPENSES', expenses });

export const addCurrenciesThunk = () => async (dispatch) => {
  const currencies = await fetchMoedas();
  dispatch(addCurrencies(currencies));
};
