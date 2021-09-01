import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import WalletForm from '../components/WalletForm';
import { getCurrencies as getCurrenciesAction } from '../actions';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      currencies: [],
    };
  }

  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  render() {
    const { email } = this.props;
    const { currencies } = this.state;
    return (
      <div>
        <h1>Email:</h1>
        <h2 data-testid="email-field">{email}</h2>
        <h1>Total:</h1>
        <h2 data-testid="total-field">{0}</h2>
        <h1>Currency:</h1>
        <h2 data-testid="header-currency-field">BRL</h2>
        <WalletForm currencies={ currencies } />
      </div>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  getCurrencies: PropTypes.func.isRequired,
};

const mapStateToProps = ({ user: { email } }) => ({
  email,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(getCurrenciesAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
