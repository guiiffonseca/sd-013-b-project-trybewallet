import React from 'react';
import AddExpensesForm from '../components/AddExpensesForm';
import Header from '../components/Header';
import { getCurrency } from '../services/Api';

class Wallet extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      moedas: [],
    };

    this.getCurrencyApi = this.getCurrencyApi.bind(this);
  }

  componentDidMount() {
    this.getCurrencyApi();
  }

  async getCurrencyApi() {
    const currency = await getCurrency();
    const currencyArr = [];

    Object.keys(currency)
      .forEach((key) => key !== 'USDT' && currencyArr.push(key));

    this.setState({ moedas: currencyArr });
  }

  render() {
    const { moedas } = this.state;

    return (
      <div className="wallet">
        <Header />
        <AddExpensesForm moedas={ moedas } />
      </div>
    );
  }
}

export default Wallet;
