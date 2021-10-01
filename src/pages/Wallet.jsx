import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ExpenseLoader from '../components/ExpenseLoader';
import Header from '../components/Header';
import { getCurrencies } from '../actions';

const ENDPOINT = 'https://economia.awesomeapi.com.br/json/all';

class Wallet extends React.Component {
  /* constructor() {
    super();

    this.state = {
      currencies: [],
    };
    // this.fetchAPI = this.fetchAPI.bind(this);
  } */

  componentDidMount() {
    this.fetchAPI();
  }

  async fetchAPI() {
    const { addCurrency } = this.props;
    const result = await (await fetch(ENDPOINT)).json();
    delete result.USDT;
    const currencies = Object.keys(result);
    addCurrency(currencies);
    // this.setState({ currencies });
  }

  render() {
    // const { currencies } = this.state;
    // if (currencies.length === 0) return <div>Loading...</div>;
    return (
      <div>
        <h2>TrybeWallet</h2>
        <Header />
        <ExpenseLoader />
      </div>
    );
  }
}

Wallet.propTypes = {
  addCurrency: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  addCurrency: (currenciesList) => dispatch(getCurrencies(currenciesList)),
});

export default connect(null, mapDispatchToProps)(Wallet);
