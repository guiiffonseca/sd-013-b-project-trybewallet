import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { fetchExchangesThunk } from '../actions';
import Input from '../components/Input';
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
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  async handleSubmit() {
    const { value, currency, method, tag, description } = this.state;
    const { setExpenses, expenses } = this.props;

    setExpenses({
      id: expenses.length,
      value,
      currency,
      method,
      tag,
      description,
    });
  }

  sum() {
    const { expenses } = this.props;
    if (expenses.length !== 0) {
      const total = expenses.reduce((acc, { value, currency, exchangeRates }) => (
        acc + (Number(value) * exchangeRates[currency].ask)
      ), 0);
      return total.toFixed(2);
    }
    return 0;
  }

  render() {
    const { description, value } = this.state;
    const { email } = this.props;
    return (
      <div>
        <header>
          TrybeWallet
          <p data-testid="email-field">{email}</p>
          <p data-testid="total-field">{this.sum()}</p>
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
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  setExpenses: PropTypes.func.isRequired,
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
  setExpenses: (expenses) => dispatch(fetchExchangesThunk(expenses)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
