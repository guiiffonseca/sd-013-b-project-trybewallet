// Coloque aqui suas actions

export const saveEmail = (state) => ({
  type: 'SAVE_EMAIL',
  email: state.email,
});

export const saveExpenses = (state) => ({
  type: 'SAVE_EXPENSES',
  state,
});

export const getCurrencies = (state) => ({
  type: 'GET_CURRENCY',
  state,
});

export const fetchMoney = (state) => (dispatch) => {
  fetch('https://economia.awesomeapi.com.br/json/all')
    .then((resolve) => resolve.json())
    .then((money) => {
      const actualState = { exchangeRates: { ...money }, ...state };
      dispatch(saveExpenses(actualState));
    });
};
