import fetchURL from '../services/currencyAPI';

// Coloque aqui suas actions
// ACTIONS TYPES
export const USER_EMAIL = 'USER_EMAIL';
export const EXPENSES_DATA = 'EXPENSES_DATA';
export const GET_CURRENCY = 'GET_CURRENCY';
export const GET_EXCHANGE_RATES = 'EXCHANGE_RATES';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';

// ACTIONS CREATOR
export const userEmail = (payload) => ({
  type: USER_EMAIL,
  payload,
});

// setExpensesData | porque estou enviado os dados para o estado
export const expensesData = (payload) => ({
  type: EXPENSES_DATA,
  payload, // expenses
});

// getCurrencySucess
export const getCurrency = (payload) => ({
  type: GET_CURRENCY,
  payload,
});

export const deleteExpense = (payload) => ({
  type: DELETE_EXPENSE,
  payload,
});

export const getCurrencyThunk = () => (dispatch) => {
  fetchURL()
    // captura a response (resposta) no then(), que é próprio objeto
    .then((object) => {
      // nescessário salvar esse object (response) no estado global
      delete object.USDT;

      // recebe todos os .code do objeto (object), a partir de cada chave.
      // Ex: { USD { code: USD }, BRL { code: BRL }, }
      const currenciesCode = Object.keys(object)
        .map((keyCurrency) => object[keyCurrency].code);

      // recebe o array dos code's
      const payload = currenciesCode;

      // chama a action getCurrency SUCESSO
      dispatch(getCurrency(payload));
    });
};

// o primeiro parâmetro é o 'payload' (dica do Rod)
export const getExpensesDataThunk = (expenses) => (dispatch) => {
  fetchURL()
    // captura a response (resposta) no then(), que é próprio objeto
    .then((object) => {
      delete object.USDT;
      expenses.exchangeRates = object; // dica do (Rod)

      dispatch(expensesData(expenses));
    });
};
