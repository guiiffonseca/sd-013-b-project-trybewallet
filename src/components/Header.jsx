import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../css/Header.css';

class Header extends Component {
  render() {
    const { email, expenses } = this.props;
    const total = () => {
      // console.log(expenses);
      const reduceExpense = expenses.reduce((acc, expense) => {
        // console.log(expense.exchangeRates[expense.currency].ask);
        const subTotal = expense.value * expense.exchangeRates[expense.currency].ask;
        acc += subTotal;
        return acc;
      }, 0);
      return parseFloat(reduceExpense).toFixed(2);
    };
    return (
      <header className="cabecalho">
        <div>
          <h4 data-testid="email-field">
            { email }
          </h4>
        </div>
        <span data-testid="total-field">
          { total() }
        </span>
        <p data-testid="header-currency-field">
          BRL
        </p>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  email: PropTypes.objectOf(PropTypes.string).isRequired,
  expenses: PropTypes.shape({
    exchangeRates: PropTypes.string,
    reduce: PropTypes.func,
  }).isRequired,
};

export default connect(mapStateToProps, null)(Header);
