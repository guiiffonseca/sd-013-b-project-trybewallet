// Coloque aqui suas actions

import fetchMoedas from '../services';

export const enter = (email) => ({ type: 'USER', email });

const addCurrencies = (currencies) => ({ type: 'CURRENCIES', currencies });

export const addCurrenciesThunk = () => async (dispatch) => {
  const currencies = await fetchMoedas();
  dispatch(addCurrencies(currencies));
};
