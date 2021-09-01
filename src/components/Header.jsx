import React from 'react';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { email, expenses } = this.props;
    return (
      <header>
        <div data-testid="email-field">{email}</div>
        <div data-testid="total-field">
          {expenses.reduce((acc, { value, exchangeRates, currency }) => {
            acc += parseFloat(value * exchangeRates[currency].ask);
            return parseFloat(acc.toFixed(2));
          }, 0)}
        </div>
        <div data-testid="header-currency-field">BRL</div>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.shape(PropTypes.string)).isRequired,
};

export default Header;
