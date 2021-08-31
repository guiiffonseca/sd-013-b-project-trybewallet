import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FormWallet from '../components/FormWallet';

class Wallet extends React.Component {
  render() {
    const { email, currencies, expenses } = this.props;
    return (
      <div>
        <header>
          <h1>TrybeWallet</h1>
          <span data-testid="email-field">
            { email }
          </span>
          <span data-testid="total-field">
            {
              expenses.length <= 0 ? 0
                : expenses.reduce((total, currentValue) => total + currentValue)
            }
          </span>
          <span data-testid="header-currency-field">
            {
              currencies.length <= 0 ? 'BRL' : currencies
            }
          </span>
        </header>

        <FormWallet />

      </div>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  currencies: PropTypes.shape.isRequired,
  expenses: PropTypes.shape.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(Wallet);
