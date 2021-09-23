import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import WalletForm from './Wallet/WalletForm';
import { getCurrencies } from '../actions'

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currencies: {},
      expenses: 0,
    };
  }

  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }
  
  render() {
    const { email } = this.props;
    const { currencies, expenses } = this.state;
    return (
      <div>
        <h1>TrybeWallet</h1>
        <span data-testid="email-field">{email}</span>
        <span data-testid="total-field">{expenses}</span>
        <span data-testid="header-currency-field"> BRL</span>
        <br />
        <WalletForm currencies={ currencies } />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(getCurrencies())
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);

