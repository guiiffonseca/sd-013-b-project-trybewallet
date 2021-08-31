import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FormWallet from '../components/FormWallet';

class Wallet extends React.Component {
  render() {
    const { email } = this.props;
    const { user } = email;
    const despesa = 0;

    return (
      <div>

        <header data-testid="header-currency-field">
          <p data-testid="email-field">{user.email}</p>
          <p data-testid="total-field">
            Despesa total:
            {despesa}

          </p>
          <p data-testid="total-field">BRL</p>
        </header>
        <FormWallet />
      </div>

    );
  }
}

function mapStateToProps(state) {
  return {
    email: state,
  };
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,

};

export default connect(mapStateToProps, null)(Wallet);
