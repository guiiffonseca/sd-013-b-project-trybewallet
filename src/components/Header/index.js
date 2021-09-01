import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  updateValue() {
    const { expenses } = this.props;
    return expenses.reduce((acc, { currency, value, exchangeRates }) => {
      const convertedValue = value * exchangeRates[currency].ask;

      return acc + convertedValue;
    }, 0);
  }

  render() {
    const { email } = this.props;
    const updateValue = this.updateValue();
    return (
      <header data-testid="email-field">
        {email}
        <div data-testid="total-field">{updateValue.toFixed(2)}</div>
        <div data-testid="header-currency-field">BRL</div>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);
