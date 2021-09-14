import React from 'react';

const apiRequest = 'https://economia.awesomeapi.com.br/json/all';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      currencyList: {},
    };
  }

  componentDidMount() {
    this.API();
  }

  async API() {
    const response = await fetch(apiRequest);
    const data = await response.json();
    console.log(data);
    this.setState({ currencyList: data });
  }

  render() {
    const { currencyList } = this.state;
    const currencies = Object.keys(currencyList);
    const currencyFilter = currencies.filter((coin) => coin !== 'USDT');
    return (
      <form>
        <label htmlFor="value">
          Valor
          <input type="number" id="value" />
        </label>
        <label htmlFor="currency">
          Moeda
          <select id="currency">
            {currencyFilter.map((coin) => <option key={ coin }>{coin}</option>)}
          </select>
        </label>
        <label htmlFor="payment">
          Método de pagamento
          <select id="payment">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
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
        <label htmlFor="description">
          Descrição
          <input type="text" id="description" />
        </label>
      </form>
    );
  }
}

export default Form;
