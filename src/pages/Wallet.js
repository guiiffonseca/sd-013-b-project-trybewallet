import React from 'react';

import Header from '../components/Header';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <form>
          <label htmlFor="expenses">
            Valor
            <input id="expenses" />
          </label>
          <label htmlFor="description">
            Descrição
            <input id="description" />
          </label>
          <label htmlFor="currency">
            Moeda
            <select id="currency">
              <option> - </option>
            </select>
          </label>
          <label htmlFor="currency">
            Moeda
            <select id="currency">
              <option> - </option>
            </select>
          </label>
          <label htmlFor="payment">
            Método de pagamento
            <select id="payment">
              <option> Dinheiro </option>
              <option> Cartão de Crédito </option>
              <option> Cartão de débito </option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag
            <select id="tag">
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

export default Wallet;
