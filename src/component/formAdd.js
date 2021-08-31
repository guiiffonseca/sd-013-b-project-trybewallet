import React, { Component } from 'react';

export default class FormAdd extends Component {
  render() {
    return (
      <form>
        <label htmlFor="value">
          Valor:
          <input type="number" id="value" />
        </label>

        <label htmlFor="describe">
          descrição:
          <textarea id="describe" />
        </label>

        <label htmlFor="currency">
          Moeda:
          <select id="currency">
            <option value="volvo">Volvo</option>
          </select>
        </label>

        <label htmlFor="paymentMethod">
          Método de pagamento:
          <select id="paymentMethod">
            <option value="dinheiro">Dinheiro</option>
            <option value="credito">Cartão de crédito</option>
            <option value="debito">Cartão de débito</option>
          </select>
        </label>

        <label htmlFor="category">
          Tag:
          <select id="category">
            <option value="alimentação">Alimentação</option>
            <option value="lazer">Lazer</option>
            <option value="trabalho">Trabalho</option>
            <option value="transporte">Transporte</option>
            <option value="saude">Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}
