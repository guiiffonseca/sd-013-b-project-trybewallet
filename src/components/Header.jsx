import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  constructor() {
    super();
    this.expensesTotal = this.expensesTotal.bind(this);
  }

  expensesTotal() {
    const { expenses } = this.props;
    const totalExpenses = expenses.reduce((acc, expense) => {
      const subTotal = expense.value * expense.exchangeRates[expense.currency].ask;
      acc += subTotal;
      return acc;
    }, 0);
    return parseFloat(totalExpenses).toFixed(2);
    // console.log(expenses);
  }

  render() {
    const { email } = this.props;
    return (
      <header id="header-wallet">
        <h3 data-testid="email-field">{ email }</h3>
        <p data-testid="total-field">{ this.expensesTotal() }</p>
        <p data-testid="header-currency-field">BRL</p>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(Object).isRequired,
};

const mapStateToProps = ({ wallet: { expenses } }) => ({
  expenses,
});

export default connect(mapStateToProps)(Header);
