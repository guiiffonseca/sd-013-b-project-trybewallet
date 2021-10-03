import React, { Component } from 'react';
import Header from '../components/header';
import ExpensesForm from '../components/expenses-form';
import ExpensivesTable from '../components/expensives-table';

class Wallet extends Component {
  render() {
    return (
      <div>
        <Header />
        <ExpensesForm />
        <ExpensivesTable />
      </div>
    );
  }
}

export default Wallet;
