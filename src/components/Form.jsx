import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);

    this.getAwesome = this.getAwesome.bind(this);

    this.state = {
      typeOfCurrency: [],
    };
  }

  componentDidMount() {
    this.getAwesome();
  }

  async getAwesome() {
    const URL = 'https://economia.awesomeapi.com.br/json/all';
    const fetchAwesomeAPI = await fetch(URL);
    const parseJSON = await fetchAwesomeAPI.json();
    const getCurrency = Object.keys(parseJSON);
    const noUSDT = getCurrency.filter((curr) => curr !== 'USDT');
    this.setState({
      typeOfCurrency: [...noUSDT],
    });
  }

  render() {
    const { typeOfCurrency } = this.state;

    return (
      <form>
        <label htmlFor="value">
          Valor
          <input type="text" id="value" />
        </label>
        <label htmlFor="description">
          Descrição
          <input type="text" id="description" />
        </label>
        <label htmlFor="currency">
          Moeda
          <select
            id="currency"
          >
            {typeOfCurrency.map((currency) => (
              <option key={ currency } value={ currency }>
                { currency }
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="paymethod">
          Método de pagamento
          <select id="paymethod">
            <option value="Dinheiro"> Dinheiro </option>
            <option value="Cartão de crédito"> Cartão de crédito </option>
            <option value="Cartão de débito"> Cartão de débito </option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select id="tag">
            <option value="Alimentação"> Alimentação </option>
            <option value="Lazer"> Lazer </option>
            <option value="Trabalho"> Trabalho </option>
            <option value="Transporte"> Transporte </option>
            <option value="Saúde"> Saúde </option>
          </select>
        </label>
      </form>
    );
  }
}
export default Form;
