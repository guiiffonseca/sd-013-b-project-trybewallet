import currencies from '../api/currencyApi';

export const logIn = (email) => ({
  type: 'LOG_IN',
  payload: email,
});

export const asyncAddExpense = (expense) => async (dispatch) => {
  const actualCurrencies = await currencies();

  dispatch({ type: 'ADD_EXPENSE',
    payload: { ...expense, exchangeRates: actualCurrencies } });
};

const def = () => 'return';

export default def;
