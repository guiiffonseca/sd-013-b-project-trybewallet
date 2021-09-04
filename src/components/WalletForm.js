import React from 'react';

export default class WalletForm extends React.Component {
  constructor() {
    super();

    this.state = {
      coins: [],
    };
  }

  componentDidMount() {
    this.getCoins();
  }

  async getCoins() {
    const coinsAPI = await fetch('https://economia.awesomeapi.com.br/json/all');
    const resolve = await coinsAPI.json();
    const coins = Object.keys(resolve).filter((coin) => coin !== 'USDT');
    this.setState({
      coins,
    });
  }

  renderCoinsOptions() {
    const { coins } = this.state;
    return (
      coins.map((coin, index) => (
        <option
          key={ index }
          value={ coin }
        >
          { coin }
        </option>
      ))
    );
  }

  render() {
    return (
      <form>
        <label htmlFor="value">
          Valor :
          <input type="text" name="value" id="value" />
        </label>

        <label htmlFor="description">
          Descrição :
          <input type="text" name="description" id="description" />
        </label>

        <label htmlFor="coin">
          Moeda :
          <select name="coin" id="coin">
            { this.renderCoinsOptions() }
          </select>
        </label>

        <label htmlFor="payment">
          Método de pagamento :
          <select name="payment" id="payment">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>

        <label htmlFor="category">
          Tag :
          <select name="category" id="category">
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>

      </form>
    );
  }
}
