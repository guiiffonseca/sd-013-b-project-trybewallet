import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

class Wallet extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <header>
        TrybeWallet
        <h6 data-testid="email-field">
          { email }
        </h6>
        <h6 data-testid="total-field">
          0
        </h6>
        <h6 data-testid="header-currency-field">
          BRL
        </h6>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps, null)(Wallet);

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};
