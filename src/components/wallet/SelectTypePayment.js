import React, { Component } from 'react';

class SelectTypePayment extends Component {
  render() {
    return (
      <form>
        <label htmlFor="wallet-type-payment">
          Método de pagamento
          <select name="payment" id="wallet-type-payment">
            <option value="money">Dinheiro</option>
            <option value="deb-card">Cartão de Crédito</option>
            <option value="cred-card">Cartão de Débito</option>

          </select>
        </label>
      </form>
    );
  }
}

export default SelectTypePayment;
