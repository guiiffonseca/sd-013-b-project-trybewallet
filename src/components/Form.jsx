import React, { Component } from 'react';

class Form extends Component {
  constructor() {
    super()
    this.state = {
      moedas: [],
    };
  }

  componentDidMount() {
    this.getApi();
  }

  async getApi() {
    const url = 'https://economia.awesomeapi.com.br/json/all';
    const fecthApi = await fetch(url);
    const getJson = await fecthApi.json();
    console.log(getJson);
    const getMoedas = Object.keys(getJson);

    const removeUSDT = getMoedas.filter((target) => target !== 'USDT');

    this.setState({
      moedas: [...removeUSDT],
    });
  }

  render() {
    const { moedas } = this.state;
    return (
      <form>
        <label htmlFor="Valor">
          Valor:
          <input type="text" id="Valor" />
        </label>
        <label htmlFor="Descrição">
          Descrição:
          <input type="text" id="Descrição" />
        </label>
        <label htmlFor="Moeda">
          Moeda:
          <select id="Moeda">
            {moedas.map((moeda) => (
              <option key={ moeda } value={ moeda }>{ moeda }</option>
            ))}
          </select>
        </label>
        <label htmlFor="Pagamento">
          Método de Pagamento:
          <select type="text" id="Pagamento">
            <option value="BRL">Dinheiro</option>
            <option value="BRL">Cartão de crédito</option>
            <option value="BRL">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="Tag">
          Tag:
          <select type="text" id="Tag">
            <option value="BRL">Alimentação</option>
            <option value="BRL">Lazer</option>
            <option value="BRL">Trabalho</option>
            <option value="BRL">Transporte</option>
            <option value="BRL">Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

export default Form;
