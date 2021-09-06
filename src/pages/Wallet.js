import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import WalletForm from '../components/WalletForm';
import '../styles/wallet.css';

class Wallet extends React.Component {
  render() {
    const { userEmail } = this.props;
    return (
      <div className="main-wallet-div">
        <div className="wallet-header">
          HEADER
          <div className="email-header">
            <h5 data-testid="email-field">{userEmail}</h5>
          </div>
          <div className="total-value">
            <h5 data-testid="total-field">0</h5>
          </div>
          <div className="currency-field" data-testid="header-currency-field">
            <h5>BRL</h5>
          </div>
        </div>
        <WalletForm props={ this.props } />
      </div>
    );
  }
}

Wallet.propTypes = {
  userEmail: PropTypes.func,
}.isRequired;

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
});

export default connect(mapStateToProps)(Wallet);
