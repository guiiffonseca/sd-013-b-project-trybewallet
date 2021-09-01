export const SUBMIT_EMAIL = 'SUBMIT_EMAIL';
export const SUBMIT_EXPENSE = 'SUBMIT_EXPENSE';

export const submitEmail = (payload) => ({
  type: SUBMIT_EMAIL,
  payload,
});

export const submitExpense = (payload) => ({
  type: SUBMIT_EXPENSE,
  payload,
});

export const submitExpenseThunk = () => async (dispatch) => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const object = await response.json();
  dispatch(submitExpense(object));
};
