// Coloque aqui suas actions
import getCurrenciesAPI from '../services/awesomeAPI';

export const SAVE_USER = 'SAVE_USER';

export const ADD_CURRENCIES_SUCCESS = 'ADD_CURRENCIES_SUCCESS';
export const ADD_CURRENCIES_ERROR = 'ADD_CURRENCIES_ERROR';

export const ADD_EXPENSE = 'ADD_EXPENSES';

export const ADD_EXCHANGE_RATES_NOW = 'ADD_EXCHANGE_RATES_NOW';
// export const DELETE_EXPENSES = 'DELETE_EXPENSES';

export const saveUser = (payload) => ({
  type: SAVE_USER,
  payload,
});

export const getCurrenciesSuccess = (payload) => ({
  type: ADD_CURRENCIES_SUCCESS,
  payload,
});

export const getCurrenciesError = (payload) => ({
  type: ADD_CURRENCIES_ERROR,
  payload,
});

export const getCurrenciesListThunk = () => async (dispatch) => {
  try {
    const response = await getCurrenciesAPI();
    const currenciesList = Object.keys(response)
      .reduce((acc, currentValue) => (
        currentValue === 'USDT' ? acc : [...acc, currentValue]
      ), []);
    const payload = {
      currencies: currenciesList,
    };
    dispatch(getCurrenciesSuccess(payload));
  } catch (error) {
    dispatch(getCurrenciesError(error));
  }
};

export const addExchangeRatesNow = (payload) => ({
  type: ADD_EXCHANGE_RATES_NOW,
  payload,
});

export const getCurrenciesThunk = () => async (dispatch) => {
  try {
    const response = await getCurrenciesAPI();
    // const responseFiltered = Object
    //   .entries(response)
    //   .reduce((acc, currentvalue) => (
    //     currentvalue[0] === 'USDT' ? acc : [...acc, currentvalue]
    //   ), [])
    //   .map((item, index) => ({ id: index, name: item[0], data: item[1] }));
    const payload = {
      exchangeRatesNow: response,
    };
    dispatch(addExchangeRatesNow(payload));
  } catch (error) {
    dispatch(getCurrenciesError(error));
  }
};

export const addExpense = (payload) => ({
  type: ADD_EXPENSE,
  payload,
});

export const getCurrenciesAndAddExpenseThunk = (expenseValue) => async (dispatch) => {
  try {
    const response = await getCurrenciesAPI();
    const { id, value, description, currency, method, tag } = expenseValue;
    const expenseNow = {
      id,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates: response,
    };
    const payload = {
      expense: expenseNow,
    };
    dispatch(addExpense(payload));
  } catch (error) {
    dispatch(getCurrenciesError(error));
  }
};
