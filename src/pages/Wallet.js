import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import WalletForm from './Wallet/WalletForm';
import { getCurrencies as fetchCurrencies } from '../actions';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expenses: 0,
    };
  }

  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  render() {
    const { email, moedas } = this.props;
    const { expenses } = this.state;
    return (
      <div>
        <h1>TrybeWallet</h1>
        <span data-testid="email-field">{email}</span>
        <span data-testid="total-field">{expenses}</span>
        <span data-testid="header-currency-field"> BRL</span>
        <br />
        <WalletForm currencies={ moedas } />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
  moedas: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(fetchCurrencies()),
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  getCurrencies: PropTypes.func.isRequired,
  moedas: PropTypes.shape({
    USD: PropTypes.shape({
      ask: 'string',
      bid: 'string',
      code: 'string',
      codein: 'string',
      create_date: 'string',
      high: 'string',
      low: 'string',
      name: 'string',
      pctChange: 'string',
      timestamp: 'string',
    }),
    ARS: PropTypes.shape({
      ask: 'string',
      bid: 'string',
      code: 'string',
      codein: 'string',
      create_date: 'string',
      high: 'string',
      low: 'string',
      name: 'string',
      pctChange: 'string',
      timestamp: 'string',
    }),
    AUD: PropTypes.shape({
      ask: 'string',
      bid: 'string',
      code: 'string',
      codein: 'string',
      create_date: 'string',
      high: 'string',
      low: 'string',
      name: 'string',
      pctChange: 'string',
      timestamp: 'string',
    }),
    BTC: PropTypes.shape({
      ask: 'string',
      bid: 'string',
      code: 'string',
      codein: 'string',
      create_date: 'string',
      high: 'string',
      low: 'string',
      name: 'string',
      pctChange: 'string',
      timestamp: 'string',
    }),
    CAD: PropTypes.shape({
      ask: 'string',
      bid: 'string',
      code: 'string',
      codein: 'string',
      create_date: 'string',
      high: 'string',
      low: 'string',
      name: 'string',
      pctChange: 'string',
      timestamp: 'string',
    }),
    CHF: PropTypes.shape({
      ask: 'string',
      bid: 'string',
      code: 'string',
      codein: 'string',
      create_date: 'string',
      high: 'string',
      low: 'string',
      name: 'string',
      pctChange: 'string',
      timestamp: 'string',
    }),
    CNY: PropTypes.shape({
      ask: 'string',
      bid: 'string',
      code: 'string',
      codein: 'string',
      create_date: 'string',
      high: 'string',
      low: 'string',
      name: 'string',
      pctChange: 'string',
      timestamp: 'string',
    }),
    DOGE: PropTypes.shape({
      ask: 'string',
      bid: 'string',
      code: 'string',
      codein: 'string',
      create_date: 'string',
      high: 'string',
      low: 'string',
      name: 'string',
      pctChange: 'string',
      timestamp: 'string',
    }),
    ETH: PropTypes.shape({
      ask: 'string',
      bid: 'string',
      code: 'string',
      codein: 'string',
      create_date: 'string',
      high: 'string',
      low: 'string',
      name: 'string',
      pctChange: 'string',
      timestamp: 'string',
    }),
    EUR: PropTypes.shape({
      ask: 'string',
      bid: 'string',
      code: 'string',
      codein: 'string',
      create_date: 'string',
      high: 'string',
      low: 'string',
      name: 'string',
      pctChange: 'string',
      timestamp: 'string',
    }),
    GBP: PropTypes.shape({
      ask: 'string',
      bid: 'string',
      code: 'string',
      codein: 'string',
      create_date: 'string',
      high: 'string',
      low: 'string',
      name: 'string',
      pctChange: 'string',
      timestamp: 'string',
    }),
    ILS: PropTypes.shape({
      ask: 'string',
      bid: 'string',
      code: 'string',
      codein: 'string',
      create_date: 'string',
      high: 'string',
      low: 'string',
      name: 'string',
      pctChange: 'string',
      timestamp: 'string',
    }),
    JPY: PropTypes.shape({
      ask: 'string',
      bid: 'string',
      code: 'string',
      codein: 'string',
      create_date: 'string',
      high: 'string',
      low: 'string',
      name: 'string',
      pctChange: 'string',
      timestamp: 'string',
    }),
    LTC: PropTypes.shape({
      ask: 'string',
      bid: 'string',
      code: 'string',
      codein: 'string',
      create_date: 'string',
      high: 'string',
      low: 'string',
      name: 'string',
      pctChange: 'string',
      timestamp: 'string',
    }),
    USDT: PropTypes.shape({
      ask: 'string',
      bid: 'string',
      code: 'string',
      codein: 'string',
      create_date: 'string',
      high: 'string',
      low: 'string',
      name: 'string',
      pctChange: 'string',
      timestamp: 'string',
    }),
    XRP: PropTypes.shape({
      ask: 'string',
      bid: 'string',
      code: 'string',
      codein: 'string',
      create_date: 'string',
      high: 'string',
      low: 'string',
      name: 'string',
      pctChange: 'string',
      timestamp: 'string',
    }),
  }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
