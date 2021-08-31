// Coloque aqui suas actions
import getCurrenciesAPI from '../services/awesomeAPI';

export const SAVE_USER = 'SAVE_USER';

export const ADD_CURRENCIES_SUCCESS = 'ADD_CURRENCIES_SUCCESS';
export const ADD_CURRENCIES_ERROR = 'ADD_CURRENCIES_ERROR';

export const ADD_EXPENSE = 'ADD_EXPENSES';
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

export const getCurrenciesThunk = () => async (dispatch) => {
  try {
    const response = await getCurrenciesAPI();
    // converte o obj de obj em array
    // const entriesResponse = Object.entries(response);
    // filtra, retirando o array USDT
    // const responseFiltered = entriesResponse.reduce((acc, currentvalue) => (
    //   currentvalue[0] === 'USDT' ? acc : [...acc, currentvalue]
    // ), []);
    // mapeia a saída, transformando em um array de objetos
    // const responseMap = responseFiltered
    //   .map((item, index) => ({ id: index, name: item[0], data: item[1] }));
    // resultado:

    const responseFiltered = Object
      .entries(response)
      .reduce((acc, currentvalue) => (
        currentvalue[0] === 'USDT' ? acc : [...acc, currentvalue]
      ), [])
      .map((item, index) => ({ id: index, name: item[0], data: item[1] }));
    const payload = {
      currencies: responseFiltered,
    };
    dispatch(getCurrenciesSuccess(payload));
  } catch (error) {
    dispatch(getCurrenciesError(error));
  }
};

export const addExpense = (payload) => ({
  type: ADD_EXPENSE,
  payload,
});
