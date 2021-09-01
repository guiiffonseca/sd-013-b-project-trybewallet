import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import '../styles/wallet.css';

class Wallet extends React.Component {
  render() {
    const { userEmail } = this.props;
    console.log(userEmail);
    return (
      <div className="main-wallet-div">
        <div className="wallet-header">
          HEADER
          <div className="email-header">
            <h3 data-testid="email-field">{userEmail}</h3>
          </div>
          <div className="total-value">
            <h1 data-testid="total-field">0</h1>
          </div>
          <div className="currency-field" data-testid="header-currency-field">
            <h2>BRL</h2>
          </div>
        </div>

      </div>
    );
  }
}

Wallet.propTypes = {
  userEmail: PropTypes.func,
}.isRequired;

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  // totalField: state.
});

export default connect(mapStateToProps)(Wallet);
