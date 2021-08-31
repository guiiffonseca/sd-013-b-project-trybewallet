import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Form from './Form';
import {
  fetchCotaçãoMomento, fetchMoedas, setExpensiveEdit, resetEditInfos,
} from '../../../../actions';

// eslint-disable-next-line max-lines-per-function
function Header(
  { email, setExpenses, setCurrencies, currencies, expenses, infosEdit, setExpensesEdit, resetInfos },
) {
  const [coins, setCoins] = useState([]);
  const [form, setForms] = useState(infosEdit);
  const [total, setTotal] = useState(0);
  const [editInfos, setEdit] = useState(infosEdit.enabled);
  useEffect(() => { setForms(infosEdit); setEdit(infosEdit.enabled); }, [infosEdit]);
  useEffect(() => { setCurrencies(); }, [setCurrencies]);
  useEffect(() => {
    const totalGlobal = expenses.reduce((acc, { currency, value, exchangeRates }) => {
      const cotação = exchangeRates[currency].ask;
      acc += value * cotação;
      return acc;
    }, 0);
    setTotal(parseFloat(totalGlobal).toFixed(2));
  }, [expenses]);
  useEffect(() => { setCoins(currencies); }, [currencies]);
  useEffect(() => {
    setForms(infosEdit);
  }, [expenses]);

  function handlerChange({ target: { name, value } }) {
    setForms({ ...form, [name]: value });
  }

  function handlerClick() {
    const some = expenses.some((expense) => expense.id === expenses.length);
    let globalForm = { id: expenses.length, ...form };
    if (some) { globalForm = { id: expenses.length + 1, ...form }; }
    const verification = expenses.some((expense) => expense.id === globalForm.id);
    if (verification && infosEdit.enabled) {
      const filterExpenses = expenses
        .filter(({ id }) => id !== globalForm.id);
      globalForm = [...filterExpenses, { ...form, id: infosEdit.id }];
      setExpensesEdit(globalForm.sort((a, b) => a.id - b.id));
      resetInfos();
    } else {
      setExpenses(globalForm);
    }
    setEdit(false);
  }

  return (
    <header>
      <h3 data-testid="email-field">{email}</h3>
      <h3 data-testid="total-field">{total}</h3>
      <h3 data-testid="header-currency-field">BRL</h3>
      <Form
        coins={ coins }
        handlerChange={ handlerChange }
        form={ form }
      />
      <input
        type="button"
        value={ editInfos ? 'Editar Despesas' : 'Adicionar Despesas' }
        onClick={ handlerClick }
      />
    </header>
  );
}

const mapStateToProps = (
  { user: { email }, wallet: { currencies, expenses }, infosEdit },
) => (
  { email, currencies, expenses, infosEdit }
);
const mapDispatchToProps = (dispatch) => ({
  setExpenses: (payload) => dispatch(fetchCotaçãoMomento(payload)),
  setCurrencies: () => dispatch(fetchMoedas()),
  setExpensesEdit: (payload) => dispatch(setExpensiveEdit(payload)),
  resetInfos: () => dispatch(resetEditInfos()),
}
);
export default connect(mapStateToProps, mapDispatchToProps)(Header);

Header.propTypes = {
  email: PropTypes.string.isRequired,
  setExpenses: PropTypes.func.isRequired,
  setCurrencies: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.object).isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  infosEdit: PropTypes.shape({
    description: PropTypes.string,
    value: PropTypes.number,
    currency: PropTypes.string,
    method: PropTypes.string,
    tag: PropTypes.string,
  }).isRequired,
};
