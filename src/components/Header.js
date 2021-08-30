import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  constructor() {
    super();
    this.totalDispense = this.totalExpense.bind(this);
  }

  totalExpense() {
    const { expenses } = this.props;
    return expenses.reduce((acc, { value, currency, exchangeRates }) => {
      const { ask } = exchangeRates[currency];
      return acc + ask * value;
    }, 0).toFixed(2);
  }

  render() {
    const { email } = this.props;
    const currency = 'BRL';

    return (
      <header>
        <div>
          <p data-testid="email-field">{ `Email: ${email}` }</p>
          <p data-testid="total-field">{ `Despesa Total: ${this.totalExpense()}` }</p>
          <p data-testid="header-currency-field">{ currency }</p>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = ({ user: { email }, wallet }) => ({
  email,
  expenses: wallet.expenses,
});

export default connect(mapStateToProps)(Header);
