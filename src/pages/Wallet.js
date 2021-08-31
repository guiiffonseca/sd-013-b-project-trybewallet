import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <div>
        <h1>Email:</h1>
        <h2 data-testid="email-field">
          {email}
        </h2>
        <h1>Total:</h1>
        <h2 data-testid="total-field">
          {0}
        </h2>
        <h1>Currency:</h1>
        <h2 data-testid="header-currency-field">
          BRL
        </h2>
      </div>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};

const mapStateToProps = ({ user: { email } }) => ({
  email,
});

export default connect(mapStateToProps, null)(Wallet);
