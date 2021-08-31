import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Form from './Form';
import { fetchCotaçãoMomento, fetchMoedas } from '../../../../actions';

function Header({ email, setExpenses, setCurrencies, currencies, expenses }) {
  const [coins, setCoins] = useState([]);
  const [form, setForms] = useState({
    description: '',
    value: 0,
    currency: 'USD',
    method: 'Dinheiro',
    tag: 'Alimentação',
  });
  const [total,
    setTotal] = useState(0);

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

  function handlerChange({ target: { name, value } }) {
    setForms({ ...form, [name]: value });
  }

  return (
    <header>
      <h3 data-testid="email-field">{email}</h3>
      <h3 data-testid="total-field">{total}</h3>
      <h3 data-testid="header-currency-field">BRL</h3>
      <Form coins={ coins } handlerChange={ handlerChange } />
      <input
        type="button"
        value="Adicionar Despesa"
        onClick={ () => setExpenses(form) }
      />
    </header>
  );
}

const mapStateToProps = ({ user: { email }, wallet: { currencies, expenses } }) => (
  { email, currencies, expenses }
);
const mapDispatchToProps = (dispatch) => ({
  setExpenses: (payload) => dispatch(fetchCotaçãoMomento(payload)),
  setCurrencies: () => dispatch(fetchMoedas()),
}
);
export default connect(mapStateToProps, mapDispatchToProps)(Header);

Header.propTypes = {
  email: PropTypes.string.isRequired,
  setExpenses: PropTypes.func.isRequired,
  setCurrencies: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.object).isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};
