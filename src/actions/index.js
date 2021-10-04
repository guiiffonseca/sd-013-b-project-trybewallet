import fetchExpenses from '../services/fetchExpenses';
import fetchAPI from '../services/index';

export const USER_EMAIL = 'USER_EMAIL';
export const REQUEST = 'REQUEST';
export const ADD_EXPENSES = 'ADD_EXPENSES';
export const ERROR = 'ERROR';
export const DELETE = 'DELETE';

// login action
export const inputEmail = (email) => ({
  type: USER_EMAIL,
  payload: email,
});

// fetch action
export const request = (currencies) => ({
  type: REQUEST,
  payload: currencies,
});

export const fetchingCurrencies = () => (dispatch) => {
  fetchAPI().then((data) => {
    delete data.USDT;
    dispatch(request(Object.keys(data)));
  });
};

export const addExpenses = (expenses) => ({
  type: ADD_EXPENSES,
  payload: expenses,
});

export const fetchingExpenses = (state) => (dispatch) => {
  fetchExpenses().then((expense) => {
    const expenseObj = { ...state, exchangeRates: { ...expense } };
    dispatch(addExpenses(expenseObj));
  });
};

export const btnDelete = (id) => ({
  type: DELETE,
  payload: id,

});
