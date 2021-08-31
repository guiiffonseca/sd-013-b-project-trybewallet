import React, { Component } from 'react';
import AddExpenseBar from '../components/AddExpenseBar';
import Header from '../components/Header';
import ExpensesTable from '../components/ExpensesTable';

class Wallet extends Component {
  render() {
    return (
      <div>
        <Header />
        <AddExpenseBar />
        <ExpensesTable />
      </div>
    );
  }
}

export default Wallet;
