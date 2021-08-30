// Coloque aqui suas actions

// Coloque aqui suas actions
export const beginFetch = () => ({
  type: 'BEGIN_FETCH',
});

export const sucessFetch = (currencies) => ({
  type: 'SUCESS_FETCH',
  payload: {
    currencies,
  },
});

export const failFetch = (error) => ({
  type: 'ERROR_FETCH',
  error,
});

export const actionLogin = (email) => ({
  type: 'LOGIN',
  payload: {
    email,
  },
});

export const actionExpenses = (allExpenses) => ({
  type: 'ADD_EXPENSES',
  payload: {
    allExpenses,
  },
});

const fetchApi = (stateForms) => async (dispatch) => {
  dispatch(beginFetch());
  try {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const obj = await response.json();
    dispatch(actionExpenses({ ...stateForms, exchangeRates: obj }));
  } catch (error) {
    dispatch(failFetch(error));
  }
};

export const fetchForCurrency = () => async (dispatch) => {
  dispatch(beginFetch());
  try {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const currencies = await response.json();
    dispatch(sucessFetch(currencies));
  } catch (error) {
    dispatch(failFetch(error));
  }
};
export default fetchApi;
