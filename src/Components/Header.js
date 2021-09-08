import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  constructor() {
    super();
    this.sumOfExpenses = this.sumOfExpenses.bind(this);
  }

  sumOfExpenses() {
    const { expenses } = this.props;
    const sum = expenses.reduce((acc, curr) => {
      const numberGenerate = curr.exchangeRates[curr.currency]
        .ask * Number.parseFloat(curr.value);
      return acc + numberGenerate;
    }, 0);
    return sum;
  }

  render() {
    const { email, expenses } = this.props;
    return (
      <header>
        <h1 data-testid="email-field">{email}</h1>
        <h1 data-testid="total-field">
          {expenses.length === 0 ? '0,00' : this.sumOfExpenses()}
        </h1>
        <h3 data-testid="header-currency-field">BRL</h3>
      </header>
    );
  }
}
const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  email: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps, null)(Header); // mapState primeiro depois mapDispath segundo, caso n tenha colque null
