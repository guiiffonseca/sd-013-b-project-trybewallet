import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import WalletForm from '../components/WalletForm';

class Wallet extends React.Component {
  render() {
    const { email, expenses } = this.props;
    const totalField = expenses.reduce(
      (accumulator, { value, exchangeRates, currency }) => (
        accumulator + Number(value) * Number(exchangeRates[currency].ask)
      ),
      0,
    );

    return (
      <div>
        <header>
          <p>
            <span data-testid="email-field">{ email }</span>
            <span data-testid="total-field">{ totalField }</span>
            <span data-testid="header-currency-field">BRL</span>
          </p>
        </header>
        <WalletForm />
      </div>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string,
  expenses: PropTypes.arrayOf(PropTypes.string),
}.isRequired;

const mapStateToProps = ({ user, wallet }) => ({
  email: user.email,
  expenses: wallet.expenses,
});

export default connect(mapStateToProps)(Wallet);
