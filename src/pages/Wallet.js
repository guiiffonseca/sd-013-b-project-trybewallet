import React from 'react';
import Header from '../components/Header';
import FormExpense from '../components/FormExpense';
import ExpenseTable from '../components/ExpenseTable';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <FormExpense />
        <ExpenseTable />
      </div>
    );
  }
}

export default Wallet;
