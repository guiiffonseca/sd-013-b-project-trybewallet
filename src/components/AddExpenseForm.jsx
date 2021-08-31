import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddExpenseForm extends Component {
  constructor(props) {
    super(props);
    this.renderAddForm = this.renderAddForm.bind(this);
    this.renderCostInput = this.renderCostInput.bind(this);
    this.renderDescriptionInput = this.renderDescriptionInput.bind(this);
    this.renderCurrenciesSelect = this.renderCurrenciesSelect.bind(this);
    this.renderPaymentMethodSelect = this.renderPaymentMethodSelect.bind(this);
    this.renderTagSelect = this.renderTagSelect.bind(this);
  }

  renderCostInput() {
    return (
      <label htmlFor="valorId">
        Valor
        <input type="text" id="valorId" />
      </label>
    );
  }

  renderDescriptionInput() {
    return (
      <label htmlFor="descriçãoId">
        Descrição
        <input type="text" id="descriçãoId" />
      </label>
    );
  }

  renderCurrenciesSelect() {
    return (
      <label htmlFor="moedaId">
        Moeda
        <select name="moedas" id="moedaId">
          <option> </option>
        </select>
      </label>
    );
  }

  renderPaymentMethodSelect() {
    return (
      <label htmlFor="pagamentoId">
        Método de pagamento
        <select name="pagamento" id="pagamentoId">
          <option value="dinheiro">Dinheiro</option>
          <option value="crédito">Cartão de crédito</option>
          <option value="débito">Cartão de débito</option>
        </select>
      </label>
    );
  }

  renderTagSelect() {
    return (
      <label htmlFor="tagId">
        Tag
        <select name="tag" id="tagId">
          <option value="alimentação">Alimentação</option>
          <option value="lazer">Lazer</option>
          <option value="trabalho">Trabalho</option>
          <option value="transporte">Transporte</option>
          <option value="saúde">Saúde</option>
        </select>
      </label>
    );
  }

  renderAddForm() {
    return (
      <form>
        {this.renderCostInput()}
        {this.renderDescriptionInput()}
        {this.renderCurrenciesSelect()}
        {this.renderPaymentMethodSelect()}
        {this.renderTagSelect()}
      </form>
    );
  }

  render() {
    return (
      <div>
        {this.renderAddForm()}
      </div>
    );
  }
}

export default connect(null, null)(AddExpenseForm);
