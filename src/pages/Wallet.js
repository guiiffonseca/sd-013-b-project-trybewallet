import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { fetchExchangesThunk, getAmount, setExpensesAction } from '../actions';
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
    const { setExpenses, exchangeRates, expenses, setTotal } = this.props;
    // await getExchanges();
    setTotal(value);
    setExpenses({
      id: [expenses].length,
      value,
      currency,
      method,
      tag,
      description,
      exchangeRates,
    });
  }

  render() {
    const { description, value } = this.state;
    const { email, amount } = this.props;
    return (
      <div>
        <header>
          TrybeWallet
          <p data-testid="email-field">{email}</p>
          <p data-testid="total-field">{!amount ? 0 : amount}</p>
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
    // id: Proptypes.string.isRequired,
    value: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    method: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    exchangeRates: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
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
  getExchanges: () => dispatch(fetchExchangesThunk()),
  setExpenses: (expenses) => dispatch(setExpensesAction(expenses)),
  setTotal: (value) => dispatch(getAmount(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
