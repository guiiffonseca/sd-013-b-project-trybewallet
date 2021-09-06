import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { fetchExchangesThunk, getAmount, setExpensesAction } from '../actions';
import Input from '../components/Input';
import { fetchExchanges } from '../utils';
import FormSelects from './FormSelects';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 0,
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      description: '',
      total: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchl = this.fetchl.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  async fetchl(currency) {
    const request = await fetch('https://economia.awesomeapi.com.br/json/all');
    const response = await request.json();
    const obj = Object.values(response).find((item) => item.code === currency).ask;
    return obj;
  }

  async handleSubmit() {
    const { value, currency, method, tag, description, total } = this.state;
    const { setExpenses, exchangeRates, expenses, setTotal } = this.props;
    const foreignCoin = await this.fetchl(currency);
    console.log(`${currency}: ${foreignCoin}`);
    this.setState({ total: [...total, Number(value * foreignCoin)] });
    setTotal(Number(value));
    setExpenses({
      id: expenses.length,
      value,
      currency,
      method,
      tag,
      description,
      exchangeRates,
    });
  }

  sum(values) {
    if (values.length !== 0) {
      const total = values.reduce((acc, item) => acc + item, 0);
      return total.toFixed(2);
    }
    return 0;
  }

  render() {
    const { description, value, total } = this.state;
    const { email } = this.props;
    return (
      <div>
        <header>
          TrybeWallet
          <p data-testid="email-field">{email}</p>
          <p data-testid="total-field">{this.sum(total)}</p>
          <p data-testid="header-currency-field">BRL</p>
          <p data-testid="password-input" />
        </header>
        <form>
          <fieldset>
            <legend>Welcome</legend>
            <Input
              type="text"
              name="value"
              id="value"
              placeholder="expense"
              required
              label="Valor"
              value={ value.toString() }
              onChange={ this.handleChange }
            />

            <Input
              type="text"
              name="description"
              id="description"
              placeholder="description"
              required
              label="Descrição"
              value={ description }
              onChange={ this.handleChange }
            />
            <FormSelects onChange={ this.handleChange } />
            <button type="button" onClick={ this.handleSubmit }>
              Adicionar despesa
            </button>
          </fieldset>
        </form>
      </div>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  exchangeRates: PropTypes.arrayOf(PropTypes.object).isRequired,
  expenses: PropTypes.shape({
    currency: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    exchangeRates: PropTypes.arrayOf(PropTypes.object).isRequired,
    length: PropTypes.func,
    method: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  }).isRequired,
  setExpenses: PropTypes.func.isRequired,
  setTotal: PropTypes.func.isRequired,
};

// Wallet.propTypes = {
//   email: PropTypes.string.isRequired, // expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
//   setExpenses: PropTypes.func.isRequired,
//   expenses: PropTypes.shape(
//     exchangeRates: PropTypes.shape(
//       ask: PropTypes.string.isRequired,
//     ).isRequired,
//   ).isRequired,

// };

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
  isLoading: state.wallet.isLoading,
  exchangeRates: state.wallet.exchangeRates,
  amount: state.wallet.amount,
});

const mapDispatchToProps = (dispatch) => ({
  getExchanges: () => dispatch(fetchExchangesThunk()),
  setExpenses: (expenses) => dispatch(setExpensesAction(expenses)),
  setTotal: (value) => dispatch(getAmount(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
