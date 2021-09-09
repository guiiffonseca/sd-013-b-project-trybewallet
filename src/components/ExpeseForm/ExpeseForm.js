import axios from 'axios';
import React, { Component } from 'react';

class ExpeseForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currencies: [],
    };

    this.fetchCurrencies = this.fetchCurrencies.bind(this);
  }

  componentDidMount() {
    this.fetchCurrencies();
  }

  async fetchCurrencies() {
    const { data } = await axios.get('https://economia.awesomeapi.com.br/json/all');
    const currencies = Object.keys(data);
    const currenciesFiltered = currencies.filter((currency) => currency !== 'USDT');
    this.setState({ currencies: currenciesFiltered });
  }

  render() {
    const { currencies } = this.state;
    return (
      <form>
        <span>
          <label htmlFor="value">
            Valor
            <input type="text" name="value" id="value" />
          </label>
        </span>

        <label htmlFor="description">
          Descrição
          <input type="text" name="description" id="description" />
        </label>

        <label htmlFor="currency">
          Moeda
          <select name="currency" id="currency">
            {currencies.map((currency) => (<option key={ currency }>{currency}</option>))}
          </select>
        </label>

        <label htmlFor="payment">
          Método de pagamento
          <select name="payment" id="payment">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>

        <label htmlFor="tag">
          Tag
          <select name="tag" id="tag">
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
        <button type="submit">Adicionar</button>
      </form>
    );
  }
}

export default ExpeseForm;
