// Coloque aqui suas actions

export const USER_TYPE = 'user';
export const WALLET_TYPE = 'wallet';
export const EXPENSES_TYPE = 'expenses';

export const userAction = (email) => ({
  type: USER_TYPE,
  payload: email,
});

export const walletAction = (currencies) => ({
  type: WALLET_TYPE,
  payload: { currencies },
});

export const expensesAction = (expenses) => ({
  type: EXPENSES_TYPE,
  payload: { expenses },
});

export const walletActionThunk = () => async (dispatch) => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const currencies = await response.json();
  delete currencies.USDT;
  dispatch(walletAction(currencies));
};

export const expensesActionThunk = (stateComponent) => async (dispatch) => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const currencies = await response.json();
  delete currencies.USDT;

  const expenses = {
    ...stateComponent,
    exchangeRates: currencies,
  };

  dispatch(expensesAction(expenses));
};
