import React, { Component } from 'react';

class Forms extends Component {
  constructor() {
    super();
    this.state = {
      currencies: [],
    };
  }

  componentDidMount() {
    this.fetchcurrencies();
  }

  async fetchcurrencies() {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await response.json();
    delete data.USDT;
    const currencies = Object.keys(data);
    this.setState({ currencies });
  }

  render() {
    const { currencies } = this.state;
    return (
      <fieldset>
        <label htmlFor="valor">
          Valor:
          <input type="text" name="valor" id="valor" />
        </label>
        <label htmlFor="descricao">
          Descrição:
          <input type="text" name="descricao" id="descricao" />
        </label>
        <label htmlFor="moeda">
          Moeda:
          <select name="moeda" id="moeda" aria-label="moeda">
            { currencies.map((currency) => (
              <option key={ currency } value={ currency }>{ currency }</option>)) }
          </select>
        </label>
        <label htmlFor="metodo">
          Método de Pagamento:
          <select name="metodo" id="metodo">
            <option value="dinheiro">Dinheiro</option>
            <option value="cartão de débito">Cartão de débito</option>
            <option value="cartão de crédito">Cartão de crédito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag:
          <select name="tag" id="tag">
            <option value="alimentação">Alimentação</option>
            <option value="lazer">Lazer</option>
            <option value="trabalho">Trabalho</option>
            <option value="transporte">Transporte</option>
            <option value="saúde">Saúde</option>
          </select>
        </label>
      </fieldset>
    );
  }
}
export default Forms;
