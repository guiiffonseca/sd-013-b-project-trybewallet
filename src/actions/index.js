import fetchAPI from '../servises/api';

export const GET_EMAIL = 'GET_EMAIL';
export const GET_CURRENCIES = 'GET_WALLET';
export const GET_EXPENSES = 'GET_AWESOMEAPI';
export const GET_NEW_EXPENSES = 'SET_NEW_EXPENSES';

export const getEmail = (email) => ({
  type: GET_EMAIL,
  email,
});
export const getCurrencies = (currencies) => ({
  type: GET_CURRENCIES,
  currencies,
});
export const getExpenses = (newExpenses) => ({
  type: GET_EXPENSES,
  newExpenses,
});

export const getNewExpenses = (newArrayExpenses) => ({
  type: GET_NEW_EXPENSES,
  newArrayExpenses,
});

export const getFetchCurrencies = () => async (dispatch) => {
  try {
    const response = await fetchAPI();
    const array = Object.keys(response)
      .filter((item) => item !== 'USDT');
    dispatch(getCurrencies(array));
  } catch (error) {
    console.error(error);
  }
};
export const getFetchExpenses = (expenses) => async (dispatch) => {
  try {
    const response = await fetchAPI();
    const newExpenses = {
      ...expenses,
      exchangeRates: response,
    };
    dispatch(getExpenses(newExpenses));
  } catch (error) {
    console.error(error);
  }
};
