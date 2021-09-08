import fetchExchanges from '../api';

// Coloque aqui suas actions
export const SET_USEREMAIL = 'SET_USEREMAIL';

export const SET_EXPENSES = 'SET_EXPENSES';

export const GET_EXCHANGES = 'GET_EXCHANGES';
export const GET_EXCHANGES_SUCCESS = 'GET_EXCHANGES_SUCCESS';
export const GET_EXCHANGES_ERROR = 'GET_EXCHANGES_ERROR';

export const setUserEmail = (payload) => ({
  type: SET_USEREMAIL,
  payload,
});

export const getExchangesAction = () => ({
  type: GET_EXCHANGES,
});

export const getExchangesErrorAction = (payload) => ({
  type: GET_EXCHANGES_ERROR,
  payload,
});

export const setExpensesAction = (payload) => ({
  type: SET_EXPENSES,
  payload,
});

export const fetchExchangesThunk = (expense) => async (dispatch) => {
  dispatch(getExchangesAction());
  try {
    const exchangeRates = await fetchExchanges();
    dispatch(setExpensesAction({ ...expense, exchangeRates }));
  } catch (error) {
    dispatch(getExchangesErrorAction(error));
  }
};
