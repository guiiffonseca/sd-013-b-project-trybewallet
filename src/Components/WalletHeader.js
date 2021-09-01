import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

class WalletHeader extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <header>
        TrybeWallet
        <h3 data-testid="email-field">{email}</h3>
        <h3 data-testid="total-field">0</h3>
        <h3 data-testid="header-currency-field">BRL</h3>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps, null)(WalletHeader);

WalletHeader.propTypes = {
  email: PropTypes.string.isRequired,
};
