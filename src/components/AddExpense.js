import React, { Component } from 'react';

class AddExpense extends Component {
  render() {
    return (
      <form action="">
        <label htmlFor="value-input">
          Valor
          <input type="text" id="value-input" />
        </label>
        <label htmlFor="description-input">
          Descrição
          <input type="text" id="description-input" />
        </label>
        <label htmlFor="currency">
          Moeda
          <select name="currency" id="currency">
            <option value=""> </option>
          </select>
        </label>
        <label htmlFor="payment-method">
          Método de pagamento
          <select name="paymentMethod" id="payment-method">
            <option value="money">Dinheiro</option>
            <option value="credit-card">Cartão de crédito</option>
            <option value="debit-card">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select name="tag" id="tag">
            <option value="food">Alimentação</option>
            <option value="recreation">Lazer</option>
            <option value="work">Trabalho</option>
            <option value="transportation">Transporte</option>
            <option value="healthcare">Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

export default AddExpense;
