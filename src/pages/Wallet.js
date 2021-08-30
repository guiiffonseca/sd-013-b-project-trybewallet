import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import WalletInputs from '../components/WalletInputs';
import Tags from '../components/Tags';
import PaymentMethods from '../components/PaymentMethods';

class Wallet extends React.Component {
  render() {
    const { email } = this.props;
    const TOTAL = 0;
    const CURRENCY = 'BRL';

    return (
      <>
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

        <form>
          <WalletInputs />
          <PaymentMethods />
          <Tags />
        </form>
      </>
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
