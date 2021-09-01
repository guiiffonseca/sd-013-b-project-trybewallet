import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class FormWallet extends Component {
  renderValueInput() {
    return (
      <label htmlFor="value-input">
        Valor:
        <input
          id="value-input"
          name="value"
        />
      </label>
    );
  }

  renderDescriptionInput() {
    return (
      <label htmlFor="description-input">
        Descrição:
        <input
          id="description-input"
          name="description"
        />
      </label>
    );
  }

  renderCurrencySelect() {
    const { currencies, renderCurrencies } = this.props;
    return (
      <label htmlFor="currency-select">
        Moeda:
        <select
          id="currency-select"
        >
          {renderCurrencies(currencies)}
        </select>
      </label>
    );
  }

  renderPaymentMethodSelect() {
    return (
      <label htmlFor="payment-method-select">
        Método de pagamento:
        <select
          id="payment-method-select"
        >
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
      </label>
    );
  }

  renderTagSelect() {
    return (
      <label htmlFor="tag-select">
        Tag
        <select
          id="tag-select"
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

  renderForm() {
    return (
      <form className="form-container">
        { this.renderValueInput() }
        { this.renderCurrencySelect() }
        { this.renderPaymentMethodSelect() }
        { this.renderTagSelect() }
        { this.renderDescriptionInput() }
      </form>
    );
  }

  render() {
    return this.renderForm();
  }
}

FormWallet.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  renderCurrencies: PropTypes.func.isRequired,
};
