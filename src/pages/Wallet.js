import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FormularyExpenses from '../components/FormularyExpenses';

class Wallet extends React.Component {
  constructor() {
    super();
    this.calculatorTotal = this.calculatorTotal.bind(this);
  }

  calculatorTotal() {
    const { expenses } = this.props;
    const total = expenses.reduce((acc, { value, currency, exchangeRates }) => {
      const result = value * exchangeRates[currency].ask;
      acc += result;
      return acc;
    }, 0);
    return parseFloat(total).toFixed(2);
  }

  render() {
    const { email } = this.props;
    return (
      <>
        <header>
          <p data-testid="email-field">
            { email }
          </p>
          <span data-testid="total-field">
            R$
            { this.calculatorTotal() }
          </span>
          <p data-testid="header-currency-field">
            BRL
          </p>
        </header>
        <FormularyExpenses />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(Wallet);
