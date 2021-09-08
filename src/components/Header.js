import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.totalValue = this.totalValue.bind(this);
  }

  totalValue() {
    const { expenses } = this.props;
    return expenses.reduce((total, { value, exchangeRates, currency }) => {
      const ratedValue = Number(value) * exchangeRates[currency].ask;
      return (parseFloat(total) + parseFloat(ratedValue)).toFixed(2);
    }, 0);
  }

  render() {
    const { email } = this.props;
    return (
      <header>
        <h1 data-testid="email-field">{ email }</h1>
        <h2 data-testid="total-field">{ this.totalValue() }</h2>
        <h2 data-testid="header-currency-field">BRL</h2>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(Header);
