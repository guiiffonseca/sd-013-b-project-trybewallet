import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import WalletFrom from '../component/WalletForm';

class Wallet extends React.Component {
  render() {
    const { email, expenses } = this.props;
    return (
      <>
        <header>
          <span data-testid="email-field">{ email }</span>
          <span data-testid="total-field">
            {
              expenses.length <= 0 ? 0
                : expenses.reduce((acc, curr) => acc + curr)
            }
          </span>
          <span data-testid="header-currency-field">
            {/* {currencies.length <= 0 ? 'BRL' : currencies} */}
            BRL
          </span>
        </header>
        <WalletFrom />
      </>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.shape.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Wallet);
