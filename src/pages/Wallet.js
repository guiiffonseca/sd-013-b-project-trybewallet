import React from 'react';
import Form from '../components/Form';
import Header from '../components/Header';
import ExpenseTable from '../components/ExpenseTable';

class Wallet extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currencies: [],
    };
  }

  componentDidMount() {
    this.getApi();
  }

  async getApi() {
    const url = 'https://economia.awesomeapi.com.br/json/all';
    const fetchAPI = await fetch(url);
    const getJSON = await fetchAPI.json();

    const getCurrencies = Object.keys(getJSON);
    const removedUSDT = getCurrencies.filter((moeda) => moeda !== 'USDT');

    this.setState({
      currencies: [...removedUSDT],
    });
  }

  render() {
    const { currencies } = this.state;
    return (
      <div>
        <div>
          <Header />
          <Form currencies={ currencies } />
        </div>
        <div>
          <ExpenseTable />
        </div>
      </div>
    );
  }
}

export default Wallet;
