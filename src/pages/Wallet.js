import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Wallet extends React.Component {
  render() {
    const { email } = this.props;

    return (
      <header>
        <h2
          data-testid="email-field"
        >
          { email }
        </h2>
        <h2
          data-testid="total-field"
        >
          0
        </h2>
        <h2
          data-testid="header-currency-field"
        >
          BRL
        </h2>
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
