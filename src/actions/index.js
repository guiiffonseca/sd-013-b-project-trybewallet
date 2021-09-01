// Coloque aqui suas actions
export const GET_CURRENCY = 'GET_CURRENCY';

export const USER_EMAIL = 'USER_EMAIL';

export const getEmail = (email) => ({
  type: USER_EMAIL,
  email,
});

export const getCurrency = (array) => ({
  type: GET_CURRENCY,
  array,
});

export const fetchCurrencyThunk = () => async (dispatch) => {
  try {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await response.json();
    data.USDT = undefined;
    const entries = Object.entries(data);
    dispatch(getCurrency(entries));
  } catch (err) {
    console.log(err);
  }
};
