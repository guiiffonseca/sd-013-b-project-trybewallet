import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Wallet extends React.Component {
  render() {
    const { email, currencies, expenses } = this.props;
    return (
      <div>
        <header>
          <h1>TrybeWallet</h1>
          <p data-testid="email-field">
            { email }
          </p>
          <p data-testid="total-field">
            {
              expenses.length <= 0 ? 0
                : expenses.reduce((total, currentValue) => total + currentValue)
            }
          </p>
          <p data-testid="header-currency-field">
            {
              currencies.length <= 0 ? 'BRL' : currencies
            }
          </p>
        </header>
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
