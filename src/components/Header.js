import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { expenses, email } = this.props;
    console.log(expenses);
    /* if (expenses.length !== 0) {
      console.log('expenses');
      expenses.forEach((element) => {
        total += Number(element.value * element.exchangeRates[element.currency].ask);
      });
    } */

    return (
      <header>
        <span data-testid="email-field">{email}</span>
        <div data-testid="total-field">total</div>
        <span data-testid="header-currency-field">BRL</span>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object),
};

Header.defaultProps = {
  expenses: [],
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps)(Header);
