import React from 'react';

import Header from '../components/Header';
import SelectPayment from '../components/SelectPayment';

import './Wallet.css';

class Wallet extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };

    this.fetchApi = this.fetchApi.bind(this);
  }

  componentDidMount() {
    this.fetchApi();
  }

  async fetchApi() {
    const fetchCurrencies = await fetch('https://economia.awesomeapi.com.br/json/all');
    const currencies = await fetchCurrencies.json();
    const currenciesList = Object.keys(currencies);
    currenciesList.splice(1, 1);
    this.setState({
      data: currenciesList,
    });
  }

  render() {
    const { data } = this.state;
    console.log(data);
    return (
      <div>
        <Header />
        <form className="wallet-style">
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
              {
                data.map((currencies) => <option key="currencies">{ currencies }</option>)
              }
            </select>
          </label>
          <SelectPayment />
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
