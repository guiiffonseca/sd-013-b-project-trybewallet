import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  calculateTotal() {
    const { expenses } = this.props;
    const total = expenses.reduce((sum, current) => {
      const { value, currency, exchangeRates } = current;
      const valueNumber = parseFloat(value);
      const exchangeRate = parseFloat(exchangeRates[currency].ask);
      sum += valueNumber * exchangeRate;
      return sum;
    }, 0);
    return total.toLocaleString('en-US', {
      minimumFractionDigits: 2, maximumFractionDigits: 2,
    });
  }

  render() {
    const { email } = this.props;
    return (
      <header>
        <p data-testid="email-field">{email}</p>
        <p>
          R$
          {' '}
          <span data-testid="total-field">{this.calculateTotal()}</span>
          {' '}
          <span data-testid="header-currency-field">BRL</span>
        </p>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf.isRequired,
};

const mapStateToProps = ({ user, wallet }) => ({
  email: user.email,
  expenses: wallet.expenses,
});

export default connect(mapStateToProps)(Header);
