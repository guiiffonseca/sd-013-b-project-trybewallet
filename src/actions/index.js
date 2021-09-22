const ACTIONS = {
  SAVE_EMAIL: 'SAVE_EMAIL',
  CALCULATE_TOTAL: 'CALCULATE_TOTAL',
  SELECTED_CURRENCY: 'SELECTED_CURRENCY',
  REQUEST_CURRENCIES: 'REQUEST_CURRENCIES',
  ADD_EXPENSES: 'ADD_EXPENSES',
};

const API_URL = 'https://economia.awesomeapi.com.br/json/all';

export const saveEmail = (email) => ({ type: ACTIONS.SAVE_EMAIL, email });

export const selectedCurrency = (currentCurrency) => ({
  type: ACTIONS.SELECTED_CURRENCY, currentCurrency });

export const fetchCurrencies = () => async (dispatch) => {
  const response = await fetch(API_URL);
  const responseJson = await response.json();
  const currencies = { ...responseJson };
  dispatch({
    type: ACTIONS.REQUEST_CURRENCIES,
    currencies,
  });
};

export const addExpenses = (expenses) => async (dispatch) => {
  const response = await fetch(API_URL);
  const data = await response.json();
  delete data.USDT; // exclui o objeto que contém a key 'USDT' do objeto recebido
  expenses.exchangeRates = data;
  dispatch({
    type: ACTIONS.ADD_EXPENSES,
    expenses,
  });
};

export default ACTIONS;

// Quando essa função addExpenses for chamada no WalletForm, o "expenses" que está vindo por parâmetro terá o mesmo valor do "state".
// Então o expenses.exchangeRates{} receberá os valores de "data"
// Recebi o ajuda do Rodrigo Augusto para desenvolver a lógica da função "addExpenses"
