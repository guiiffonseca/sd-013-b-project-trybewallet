import React, { Component } from 'react';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';

class Header extends Component {
  constructor(props) {
    super(props);

    this.totalExpenses = this.totalExpenses.bind(this);
  }

  totalExpenses() {
    let total = 0;
    const { expenses } = this.props;

    expenses.forEach(({ value, currency, exchangeRates }) => {
      total += exchangeRates[currency].ask * value;
    });
    return total;
  }

  render() {
    const { email } = this.props;
    return (
      <header>
        <div className="InfoLogin">
          <h3 data-Testid="email-field">
            { email }
          </h3>
          <h4 data-testid="total-field">
            { this.totalExpenses() }
          </h4>
          <h4 data-testid="header-currency-field">
            BRL
          </h4>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  email: Proptypes.string,
}.isRequired;

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(Header);
