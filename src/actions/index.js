export const EMAIL = 'EMAIL';
export const EXPENSES = 'EXPENSES';
export const CURRENCIES = 'CURRENCIES';

export const saveEmailAction = (email) => ({ type: EMAIL, email });
export const saveExpenseAction = (expense) => ({ type: EXPENSES, expense });

const currencieAction = (currencies) => ({ type: CURRENCIES, currencies });

export const fetchCurrencies = () => async (dispatch) => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const responseInJSON = await response.json();
  return dispatch(currencieAction(responseInJSON));
};
