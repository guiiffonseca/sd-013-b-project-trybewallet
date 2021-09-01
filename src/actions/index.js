export const setEmail = (state) => ({
  type: 'SET_EMAIL',
  email: state.email,
});

export const saveExpenses = (state) => ({
  type: 'SET_EXPENSES',
  state,
});

export const fetchApi = (state) => (dispatch) => {
  fetch('https://economia.awesomeapi.com.br/json/all')
    .then((resolve) => resolve.json())
    .then((moeda) => {
      const actualState = { exchangeRates: { ...moeda }, ...state };
      dispatch(saveExpenses(actualState));
    });
};
