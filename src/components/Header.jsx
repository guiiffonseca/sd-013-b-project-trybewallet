import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

//  CR de Lucas Caribe me ajudou a montar essa logica:

class Header extends React.Component {
  totalExpenses() {
    const { expenses } = this.props;
    return expenses.reduce((acc, { value, currency, exchangeRates }) => {
      const brlValue = value * exchangeRates[currency].ask;
      return acc + brlValue;
    }, 0);
  }

  render() {
    const { user } = this.props;
    return (
      <header>
        <p data-testid="email-field">
          { user }
        </p>
        <p data-testid="total-field">
          { this.totalExpenses().toFixed(2) }
        </p>
        <p data-testid="header-currency-field">
          BRL
        </p>
      </header>
    );
  }
}

Header.propTypes = {
  expenses: PropTypes.shape({
    reduce: PropTypes.func,
  }).isRequired,
  user: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);
