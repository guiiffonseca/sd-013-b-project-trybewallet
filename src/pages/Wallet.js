import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ExpensesForm from '../components/ExpensesForm';
import ExpensesTable from '../components/ExpensesTable';

class Wallet extends React.Component {
  constructor() {
    super();
    this.totalSum = this.totalSum.bind(this);
  }

  totalSum() {
    const { expenses } = this.props;
    let totalAdd = 0;
    expenses.forEach((expense) => {
      totalAdd += parseFloat(expense.value)
      * parseFloat(expense.exchangeRates[expense.currency].ask);
      return totalAdd.toFixed(2);
    });
    return totalAdd.toFixed(2);
  }

  render() {
    const { email } = this.props;

    return (
      <div>
        <header>
          <div data-testid="email-field">{ email }</div>
          <div data-testid="total-field">{ this.totalSum() }</div>
          <div data-testid="header-currency-field">BRL</div>
        </header>
        <ExpensesForm />
        <ExpensesTable />
      </div>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
  total: state.wallet.expensesTotal,
});

export default connect(mapStateToProps, null)(Wallet);
