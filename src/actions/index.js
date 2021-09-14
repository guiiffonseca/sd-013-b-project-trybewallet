// Coloque aqui suas actions
const ACTIONS = {
  SAVE_EMAIL: 'SAVE_EMAIL',
  SHOW_EXPENSES: 'SHOW_EXPENSES',
  REQUEST_CURRENCIES: 'REQUEST_CURRENCIES',
  RECEIVED_CURRENCIES: 'RECEIVED_CURRENCIES',
};

const API_URL = 'https://economia.awesomeapi.com.br/json/all';

export const saveEmail = (email) => ({ type: ACTIONS.SAVE_EMAIL, email });
export const showExpenses = (expenses) => ({ type: ACTIONS.SHOW_EXPENSES, expenses });

const requestCurrencies = () => ({ type: ACTIONS.REQUEST_CURRENCIES });
const receivedCurrencies = (currencies) => ({
  type: ACTIONS.RECEIVED_CURRENCIES,
  currencies,
});

export function fetchCurrencies() {
  return (dispatch) => {
    dispatch(requestCurrencies());
    return fetch(API_URL)
      .then((response) => response.json())
      .then((currencies) => dispatch(receivedCurrencies(currencies)));
  };
}

export default ACTIONS;
