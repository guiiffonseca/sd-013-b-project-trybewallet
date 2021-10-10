import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/header';
import ExpensesForm from '../components/expenses-form';
import ExpensivesTable from '../components/expensives-table';
import ExpenseEdit from '../components/expense-edit';

class Wallet extends Component {
  render() {
    const { editExpense } = this.props;
    return (
      <div>
        <Header />
        {editExpense ? <ExpenseEdit /> : <ExpensesForm />}
        <ExpensivesTable />
      </div>
    );
  }
}

Wallet.propTypes = {
  editExpense: PropTypes.bool,
}.isRequired;

const mapStateToProps = (state) => ({
  editExpense: state.wallet.editExpense,
});

export default connect(mapStateToProps)(Wallet);
