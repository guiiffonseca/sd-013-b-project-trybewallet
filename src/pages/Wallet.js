import React from 'react';
import { connect } from 'react-redux';
// import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import Header from '../components/Header';
import AddExpenses from '../components/AddExpenses';
import TableExpenses from '../components/TableExpenses';

import { getCurrenciesListThunk } from '../actions';

import './Wallet.css';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalExpenses: 0,
    };
    this.updateTotalExpenses = this.updateTotalExpenses.bind(this);
  }

  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  componentDidUpdate() {
    const { expenses } = this.props;
    const { totalExpenses } = this.state;
    const total = this.getTotalExpenses(expenses);
    if (total !== totalExpenses) {
      this.updateTotalExpenses(total);
    }
  }

  getTotalExpenses(expenses) {
    let totalExpenses = 0;
    expenses.forEach((element) => {
      totalExpenses += element.value * element.exchangeRates[element.currency].ask;
    });
    return totalExpenses;
  }

  updateTotalExpenses(total) {
    this.setState({
      totalExpenses: total,
    });
  }

  render() {
    const { email, currencies, expenses, exchangeRatesNow } = this.props;
    const id = expenses.length !== 0 ? expenses[expenses.length - 1].id + 1 : 0;
    const { totalExpenses } = this.state;
    return (
      // (email.length === 0)
      //   ? <Redirect to="/" />
      //   : <div>TrybeWallet</div>
      <div className="wallet-main">
        <Header email={ email } totalExpenses={ totalExpenses } />
        <AddExpenses
          currencies={ currencies }
          id={ id }
          exchangeRatesNow={ exchangeRatesNow }
        />
        <TableExpenses
          expenses={ expenses }
        />
      </div>
    );
  }
}

const mapStateToProps = (
  { user: { email }, wallet: { currencies, expenses, exchangeRatesNow } },
) => ({
  email,
  currencies,
  expenses,
  exchangeRatesNow,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(getCurrenciesListThunk()),
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  getCurrencies: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(
    PropTypes.shape({}).isRequired,
  ).isRequired,
  expenses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  exchangeRatesNow: PropTypes.shape({}).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
