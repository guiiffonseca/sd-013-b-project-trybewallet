// Coloque aqui suas actions
const URL = 'https://economia.awesomeapi.com.br/json/all';
export const SAVE_EMAIL = 'SAVE_EMAIL';
export const SAVE_CURRENCIES = 'SAVE_CURRENCIES';

export const saveEmail = (email) => ({
  type: SAVE_EMAIL,
  payload: email,
});

export const requestCurrencies = (currencies) => ({
  type: SAVE_CURRENCIES,
  payload: currencies,
});

export const requestApi = () => async (dispatch) => {
  const resolveApi = await fetch(URL);
  const currencies = Object.keys(await resolveApi.json());
  dispatch(requestCurrencies(currencies));
};
