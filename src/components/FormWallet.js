import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { requestApi } from '../actions';

class FormWallet extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: -1,
      value: '',
      description: '',
      currency: '',
      method: '',
      tag: '',
    };

    this.holdChange = this.holdChange.bind(this);
    this.updateId = this.updateId.bind(this);
    this.addExpense = this.addExpense.bind(this);
  }

  holdChange(name, value) {
    this.setState({
      [name]: value,
    });
  }

  async updateId() {
    this.setState((prevState) => ({
      id: prevState.id + 1,
    }));
  }

  async addExpense() {
    const { saveExpense } = this.props;
    await this.updateId();
    saveExpense(this.state);
  }

  renderValueInput(value) {
    return (
      <label htmlFor="value-input">
        Valor:
        <input
          id="value-input"
          name="value"
          value={ value }
          onChange={ ({ target }) => this.holdChange(target.name, target.value) }
        />
      </label>
    );
  }

  renderDescriptionInput(value) {
    return (
      <label htmlFor="description-input">
        Descrição:
        <input
          id="description-input"
          name="description"
          value={ value }
          onChange={ ({ target }) => this.holdChange(target.name, target.value) }
        />
      </label>
    );
  }

  renderCurrencySelect(value) {
    const { currencies, renderCurrencies } = this.props;
    return (
      <label htmlFor="currency-select">
        Moeda:
        <select
          id="currency-select"
          name="currency"
          value={ value }
          onChange={ ({ target }) => this.holdChange(target.name, target.value) }
        >
          {renderCurrencies(currencies)}
        </select>
      </label>
    );
  }

  renderPaymentMethodSelect(value) {
    return (
      <label htmlFor="payment-method-select">
        Método de pagamento:
        <select
          id="payment-method-select"
          name="method"
          value={ value }
          onChange={ ({ target }) => this.holdChange(target.name, target.value) }
        >
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
      </label>
    );
  }

  renderTagSelect(value) {
    return (
      <label htmlFor="tag-select">
        Tag:
        <select
          id="tag-select"
          name="tag"
          value={ value }
          onChange={ ({ target }) => this.holdChange(target.name, target.value) }
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

  renderAddExpenseButton() {
    return (
      <button
        type="button"
        onClick={ this.addExpense }
      >
        Adicionar despesa
      </button>
    );
  }

  renderForm() {
    const { value, currency, description, method, tag } = this.state;
    return (
      <form className="form-container">
        { this.renderValueInput(value) }
        { this.renderCurrencySelect(currency) }
        { this.renderPaymentMethodSelect(method) }
        { this.renderTagSelect(tag) }
        { this.renderDescriptionInput(description) }
        { this.renderAddExpenseButton() }
      </form>
    );
  }

  render() {
    return this.renderForm();
  }
}

const mapDispatchToProps = (dispatch) => ({
  saveExpense: (state) => dispatch(requestApi(state)),
});

FormWallet.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string),
  renderCurrencies: PropTypes.func,
  saveExpense: PropTypes.func,
}.isRequired;

export default connect(null, mapDispatchToProps)(FormWallet);
