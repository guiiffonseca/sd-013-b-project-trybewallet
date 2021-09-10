import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class HeaderWallet extends Component {
  getTotalExpenses() {
    const { expenses } = this.props;
    if (expenses) {
      const totalExpenses = expenses
        .reduce((total, expense) => total
        + (Number(expense.value)
        * Number(expense.exchangeRates[expense.currency].ask)), 0);
      return totalExpenses;
    }
    return 0;
  }

  renderHeader() {
    const { email } = this.props;
    const total = this.getTotalExpenses();
    return (
      <div className="header-container">
        <span data-testid="email-field">{`Email: ${email}`}</span>
        <span data-testid="total-field">{`Despesa total: R$ ${total}`}</span>
        <span data-testid="header-currency-field">BRL</span>
      </div>
    );
  }

  render() {
    return this.renderHeader();
  }
}

HeaderWallet.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(HeaderWallet);
