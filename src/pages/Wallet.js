import React from 'react';
import { connect } from 'react-redux';
// import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import Header from '../components/Header';
import AddExpenses from '../components/AddExpenses';
import { getCurrenciesThunk } from '../actions';

import './Wallet.css';

class Wallet extends React.Component {
  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  render() {
    const { email, currencies } = this.props;
    return (
      // (email.length === 0)
      //   ? <Redirect to="/" />
      //   : <div>TrybeWallet</div>
      <div className="wallet-main">
        <Header email={ email } />
        <AddExpenses
          currencies={ currencies }
        />
        <div>TrybeWallet</div>
      </div>
    );
  }
}

const mapStateToProps = ({ user: { email }, wallet: { currencies } }) => ({
  email,
  currencies,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(getCurrenciesThunk()),
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  getCurrencies: PropTypes.func.isRequired,
  currencies: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    data: PropTypes.shape({
      code: PropTypes.string.isRequired,
      codein: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      high: PropTypes.string.isRequired,
      low: PropTypes.string.isRequired,
      varBid: PropTypes.string.isRequired,
      pctChange: PropTypes.string.isRequired,
      bid: PropTypes.string.isRequired,
      ask: PropTypes.string.isRequired,
      timestamp: PropTypes.string.isRequired,
      create_date: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
