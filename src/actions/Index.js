import apideMoedas from '../ApiMoedas';

const fazerLogin = (state) => ({
  type: 'LOGIN',
  state,
});

export default fazerLogin;

// Actions das Api Moedas e Adicionar Despesas

export const CURRENCIES = 'CURRENCIES';
export const EXPENSES_SUCESS = 'EXPENSES_SUCESS';

export const receiveMoedas = (payload) => ({
  type: CURRENCIES,
  payload });

export const addExpenses = (payload) => ({
  type: EXPENSES_SUCESS,
  payload,
});

// Pegar os valores da moeda de atualizada;
export const fetchMoedas = (expense) => async (dispatch) => {
  const moedasData = await apideMoedas();
  if (expense !== undefined) {
    const { expenses, newExpenses } = expense;
    let expensesTotal = expenses;
    const expenseAtual = { ...newExpenses, exchangeRates: moedasData };
    expensesTotal = [...expensesTotal, expenseAtual];
    dispatch(addExpenses(expensesTotal));
  }
  dispatch(receiveMoedas(moedasData));
};
