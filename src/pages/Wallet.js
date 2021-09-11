import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import AddForm from '../components/AddForm';
import {
  updateCurrenciesThunk,
  addExpenseAction,
} from '../actions';
import ExpensesTable from '../components/ExpensesTable';

class Wallet extends Component {
  constructor() {
    super();

    this.state = {
      toAdd: {
        id: 0,
        value: 0,
        description: '',
        currency: '',
        method: 'Dinheiro',
        tag: 'Alimentação',
      },
    };

    this.handleChange = this.handleChange.bind(this);
    this.getCurrenciesKeys = this.getCurrenciesKeys.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.updateTotal = this.updateTotal.bind(this);
    this.updateCurrencyState = this.updateCurrencyState.bind(this);
  }

  async componentDidMount() {
    const { updateCurrencies } = this.props;
    updateCurrencies();
    this.updateCurrencyState();
  }

  componentDidUpdate(prevProps) {
    const { currencies } = this.props;
    if (currencies !== prevProps.currencies) {
      this.updateCurrencyState();
    }
  }

  getCurrenciesKeys() {
    const { currencies } = this.props;
    let keys = Object.keys(currencies);
    keys = keys.filter((key) => key !== 'USDT');
    return keys;
  }

  updateCurrencyState() {
    const { currencies } = this.props;
    const { toAdd } = this.state;
    const firstCurrency = Object.keys(currencies)[0];
    this.setState({ toAdd: { ...toAdd, currency: firstCurrency } });
  }

  handleChange({ target }) {
    const { value, name } = target;
    const { toAdd } = this.state;
    this.setState({ toAdd: { ...toAdd, [name]: value } });
  }

  handleAdd() {
    const { updateCurrencies, currencies, addExpense } = this.props;
    updateCurrencies();
    const { toAdd } = this.state;
    const { id, value, description, currency, method, tag } = toAdd;
    const firstCurrency = Object.keys(currencies)[0];
    const newExpense = {
      id,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates: currencies,
    };
    addExpense(newExpense);
    this.setState({
      toAdd: {
        id: parseInt(id, 10) + 1,
        value: 0,
        description: '',
        currency: firstCurrency,
        method: 'Dinheiro',
        tag: 'Alimentação',
      },
    });
  }

  updateTotal() {
    const { expenses } = this.props;
    const total = expenses.reduce((accumulator, { value, currency, exchangeRates }) => (
      accumulator + (parseInt(value, 10) * exchangeRates[currency].ask)), 0);
    return Math.floor(total * 100) / 100;
  }

  render() {
    const { email, expenses } = this.props;
    const { toAdd } = this.state;
    return (
      <div>
        <header>
          <p>TrybeWallet</p>
          <div data-testid="email-field">{ email }</div>
          <div data-testid="header-currency-field">BRL</div>
          <div data-testid="total-field">
            { expenses.length >= 1 ? this.updateTotal() : 0 }
          </div>
        </header>
        <AddForm
          changeFunc={ this.handleChange }
          toAdd={ toAdd }
          currencies={ this.getCurrenciesKeys() }
        />
        <button
          type="button"
          onClick={ this.handleAdd }
        >
          Adicionar Despesa
        </button>
        <ExpensesTable />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  updateCurrencies: () => dispatch(updateCurrenciesThunk()),
  addExpense: (value) => dispatch(addExpenseAction(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  currencies: PropTypes.objectOf().isRequired,
  expenses: PropTypes.arrayOf.isRequired,
  updateCurrencies: PropTypes.func.isRequired,
  addExpense: PropTypes.func.isRequired,
};
