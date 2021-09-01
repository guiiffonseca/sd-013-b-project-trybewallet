import React, { Component } from 'react';

class SelectPayment extends Component {
  render() {
    return (
      <label htmlFor="payment">
        Método de pagamento
        <select id="payment">
          <option> Dinheiro </option>
          <option> Cartão de Crédito </option>
          <option> Cartão de débito </option>
        </select>
      </label>
    );
  }
}

export default SelectPayment;
