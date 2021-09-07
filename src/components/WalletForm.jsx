import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

import { getCurrenciesThunk, exchangeRatesThunk } from '../actions';

class WalletForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      exchangeRates: {},
    };

    this.handleChange = this.handleChange.bind(this);
    this.clickButton = this.clickButton.bind(this);
  }

  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  clickButton() {
    const { expensesFromGlobal, getexpenses } = this.props;
    let idToExpense = 0;

    if (expensesFromGlobal.lenght === 0) {
      idToExpense = 0;
    } else {
      idToExpense = expensesFromGlobal.length;
    }

    const toSendExpenses = {
      id: idToExpense,
      ...this.state,
    };
    getexpenses(toSendExpenses);

    this.setState({
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      exchangeRates: {},
    });
  }

  valueInput(value) {
    return (
      <label htmlFor="input-value">
        Valor
        <input
          name="value"
          type="text"
          id="input-value"
          value={ value }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  descriptionInput(description) {
    return (
      <label htmlFor="input-desc">
        Descrição
        <input
          name="description"
          type="text"
          id="input-desc"
          value={ description }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  currencyInput(currency) {
    const { currencies } = this.props;
    return (
      <label htmlFor="input-currency">
        Moeda
        <select
          name="currency"
          id="input-currency"
          value={ currency }
          onChange={ this.handleChange }
        >
          { currencies.map((item) => (
            <option value={ item } key={ item }>{item}</option>
          ))}
        </select>
      </label>
    );
  }

  paymentMethodInput(method) {
    return (
      <label htmlFor="input-payment">
        Método de pagamento
        <select
          name="method"
          id="input-payment"
          value={ method }
          onChange={ this.handleChange }
        >
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
      </label>
    );
  }

  tagInput(tag) {
    return (
      <label htmlFor="input-tag">
        Tag
        <select
          name="tag"
          id="input-tag"
          value={ tag }
          onChange={ this.handleChange }
        >
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
      </label>
    );
  }

  addButton() {
    return (
      <span className="add-expense-btn-box">
        <button
          type="button"
          onClick={ this.clickButton }
          className="add-expense-btn"
        >
          Adicionar despesa
        </button>
      </span>
    );
  }

  render() {
    const { value, description, currency, method, tag } = this.state;
    return (
      <div className="main-form-wallet">
        <form>
          { this.valueInput(value) }
          { this.descriptionInput(description) }
          { this.currencyInput(currency) }
          { this.paymentMethodInput(method) }
          { this.tagInput(tag) }
          { this.addButton() }
        </form>
      </div>
    );
  }
}

WalletForm.propTypes = {
  fetchCurrencies: propTypes.func,
}.isRequired;

const mapDispatchToProps = (dispath) => ({
  getCurrencies: (payload) => dispath(getCurrenciesThunk(payload)),
  getexpenses: (payload) => dispath(exchangeRatesThunk(payload)),
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expensesFromGlobal: state.wallet.expenses,
});

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
