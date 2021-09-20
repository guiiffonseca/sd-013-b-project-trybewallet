export const ALL_ACTIONS = {
  SET_EMAIL: 'SET_EMAIL',
  SET_EXPENSES: 'SET_EXPENSES',
  SET_CURRENCIES: 'SET_CURRENCIES',
  SET_VALUE: 'SET_VALUE',
  SET_DESCRIPTION: 'SET_DESCRIPTION',
  SET_CURRENCY: 'SET_CURRENCY',
  SET_PAYMENT: 'SET_PAYMENT',
  SET_TAG: 'SET_TAG',
  SET_EXCHANGERATES: 'SET_EXCHANGERATES',
  SET_EXPENSE_DEFAULT: 'SET_EXPENSE_DEFAULT',
  SET_EDIT_EXPENSE: 'SET_EDIT_EXPENSE',
  SET_ID_EDIT: 'SET_ID_EDIT',
};

// USER
export const setEmail = (payload) => ({
  type: ALL_ACTIONS.SET_EMAIL,
  payload,
});
// USER

// WALLET
export const setExpenses = (payload) => ({
  type: ALL_ACTIONS.SET_EXPENSES,
  payload,
});

export const fetchCurrenciesAPI = () => async (dispatch) => {
  const urlAPI = 'https://economia.awesomeapi.com.br/json/all';
  const currenciesResponse = await (await fetch(urlAPI)).json();
  delete currenciesResponse.USDT;

  dispatch({
    type: ALL_ACTIONS.SET_CURRENCIES,
    payload: Object.keys(currenciesResponse),
  });
};
// WALLET

// EXPENSE
export const setValue = (payload) => ({
  type: ALL_ACTIONS.SET_VALUE,
  payload,
});

export const setDescripton = (payload) => ({
  type: ALL_ACTIONS.SET_DESCRIPTION,
  payload,
});

export const setCurrency = (payload) => ({
  type: ALL_ACTIONS.SET_CURRENCY,
  payload,
});

export const setPayment = (payload) => ({
  type: ALL_ACTIONS.SET_PAYMENT,
  payload,
});

export const setTag = (payload) => ({
  type: ALL_ACTIONS.SET_TAG,
  payload,
});

export const setExchangerates = () => async (dispatch) => {
  const urlAPI = 'https://economia.awesomeapi.com.br/json/all';
  const currenciesResponse = await (await fetch(urlAPI)).json();
  // https://stackoverflow.com/questions/3455405/how-do-i-remove-a-key-from-a-javascript-object
  delete currenciesResponse.USDT;
  dispatch({
    type: ALL_ACTIONS.SET_EXCHANGERATES,
    payload: currenciesResponse,
  });
};

export const setExpenseDefaultTag = (payload) => ({
  type: ALL_ACTIONS.SET_EXPENSE_DEFAULT,
  payload,
});

// EXPENSE

// EDIT EXPENSE
export const setEditExpense = (payload) => ({
  type: ALL_ACTIONS.SET_EDIT_EXPENSE,
  payload,
});

export const setIDEdit = (payload) => ({
  type: ALL_ACTIONS.SET_ID_EDIT,
  payload,
});

// EDIT EXPENSE
