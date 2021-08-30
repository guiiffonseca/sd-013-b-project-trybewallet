import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  render() {
    const { email } = this.props;
    const TOTAL = 0;
    const CURRENCY = 'BRL';

    return (
      <header>
        <span data-testid="email-field">
          { `Email: ${email} `}
        </span>
        <span data-testid="total-field">
          {`Despesa Total: ${TOTAL}`}
        </span>
        <span data-testid="header-currency-field">
          { CURRENCY }
        </span>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Wallet);
