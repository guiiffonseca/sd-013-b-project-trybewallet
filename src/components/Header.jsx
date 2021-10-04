import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  constructor(props) {
    super(props);
    this.expensesSum = this.expensesSum.bind(this);
  }

  expensesSum() {
    const { expenses } = this.props;
    const sum = expenses.reduce((acc, index) => acc
    + (index.value * index.exchangeRates[index.currency].ask), 0);
    return sum;
  }

  render() {
    const { email } = this.props;
    return (
      <header>
        <span data-testid="email-field">
          {email}
        </span>
        <div>
          <span data-testid="total-field">{ this.expensesSum() }</span>
          <span data-testid="header-currency-field">BRL</span>
        </div>
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
