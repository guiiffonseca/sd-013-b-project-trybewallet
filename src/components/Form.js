import React, { Component } from 'react';

const three = 3;

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      coinsList: [],
    };
  }

  componentDidMount() {
    this.fetchCoins();
  }

  async fetchCoins() {
    const result = await fetch('https://economia.awesomeapi.com.br/json/all');
    const response = await result.json();
    const Coins = Object.keys(response)
      .filter((coin) => (coin.length <= three));
    this.setState({
      coinsList: Coins,
    });
  }

  render() {
    const { coinsList } = this.state;
    return (
      <div>
        <form>
          <label htmlFor="valor">
            Valor:
            <input type="text" id="valor" />
          </label>
          <label htmlFor="moeda">
            Moeda:
            <select type="text" id="moeda">
              {coinsList.map((coin) => (
                <option key={ coin }>
                  { coin }
                </option>
              ))}
            </select>
          </label>
          <label htmlFor="descrição">
            descrição:
            <textarea type="text" id="descrição" />
          </label>
          <label htmlFor="método de pagamento">
            Método de pagamento:
            <select type="text" id="método de pagamento">
              <option id="dinheiro">Dinheiro</option>
              <option id="cartão de crédito">Cartão de crédito</option>
              <option id="cartão de débito">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag:
            <select type="text" id="tag" name="tag">
              <option name="alimentação" id="alimentação">Alimentação</option>
              <option name="lazer" id="lazer">Lazer</option>
              <option name="trabalho" id="trabalho">Trabalho</option>
              <option name="transporte" id="transporte">Transporte</option>
              <option name="saúde" id="saúde">Saúde</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

export default Form;
