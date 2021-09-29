import React, { Component } from 'react';
import fetchApi from '../services/api';

export default class Expenses extends Component {
  constructor() {
    super();
    this.state = {
      coins: [],
    };
    this.renderCoins = this.renderCoins.bind(this);
  }

  async fetchCoins() {
    const data = await fetchApi();
    const response = Object.keys(data);
    response.splice(response.indexOf('USDT'), 1);

    this.setState({ coins: response });
  }

  renderCoins() {
    const { coins } = this.state;

    return (
      <label htmlFor="moeda">
        Moeda
        <select id="moeda" name="moeda">
          {coins.map((name, index) => (
            <option key={ index } value={ name }>{name}</option>
          ))}
        </select>
      </label>
    );
  }

  render() {
    return (
      <section>
        <form>
          <label htmlFor>
            Valor:
            <input type="text" name="value-input" />
          </label>

          <label htmlFor>
            Descrição
            <input type="text" name="desc-input" />
          </label>
          { this.renderCoins() }

          <label htmlFor>
            Método de pagamento:
            <select>
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
          </label>

          <label htmlFor>
            Tag:
            <select>
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>
          </label>

        </form>
      </section>
    );
  }
}
