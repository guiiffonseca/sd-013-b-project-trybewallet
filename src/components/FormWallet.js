import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class FormWallet extends Component {
  renderValueInput(callback, value) {
    return (
      <label htmlFor="value-input">
        Valor:
        <input
          id="value-input"
          name="value"
          value={ value }
          onChange={ ({ target }) => callback(target.name, target.value) }
        />
      </label>
    );
  }

  renderDescriptionInput(callback, value) {
    return (
      <label htmlFor="description-input">
        Descrição:
        <input
          id="description-input"
          name="description"
          value={ value }
          onChange={ ({ target }) => callback(target.name, target.value) }
        />
      </label>
    );
  }

  renderCurrencySelect(callback, value) {
    const { currencies, renderCurrencies } = this.props;
    return (
      <label htmlFor="currency-select">
        Moeda:
        <select
          id="currency-select"
          name="currency"
          value={ value }
          onChange={ ({ target }) => callback(target.name, target.value) }
        >
          {renderCurrencies(currencies)}
        </select>
      </label>
    );
  }

  renderPaymentMethodSelect(callback, value) {
    return (
      <label htmlFor="payment-method-select">
        Método de pagamento:
        <select
          id="payment-method-select"
          name="method"
          value={ value }
          onChange={ ({ target }) => callback(target.name, target.value) }
        >
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
      </label>
    );
  }

  renderTagSelect(callback, value) {
    return (
      <label htmlFor="tag-select">
        Tag:
        <select
          id="tag-select"
          name="tag"
          value={ value }
          onChange={ ({ target }) => callback(target.name, target.value) }
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

  renderAddExpenseButton(callback) {
    return (
      <button
        type="button"
        onClick={ callback }
      >
        Adicionar despesa
      </button>
    );
  }

  renderForm() {
    const { holdChange, addExpense, formInfo } = this.props;
    const { value, tag, description, method, currency } = formInfo;
    return (
      <form className="form-container">
        { this.renderValueInput(holdChange, value) }
        { this.renderCurrencySelect(holdChange, currency) }
        { this.renderPaymentMethodSelect(holdChange, method) }
        { this.renderTagSelect(holdChange, tag) }
        { this.renderDescriptionInput(holdChange, description) }
        { this.renderAddExpenseButton(addExpense) }
      </form>
    );
  }

  render() {
    return this.renderForm();
  }
}

FormWallet.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string),
  renderCurrencies: PropTypes.func,
  holdChange: PropTypes.func,
  addExpense: PropTypes.func,
  formInfo: PropTypes.shape({}),
}.isRequired;
