import React from 'react';
import ExpensesForm from '../components/ExpensesForm';
import ExpenseTable from '../components/ExpenseTable';
import Header from '../components/Header';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        TrybeWallet
        <Header />
        <ExpensesForm />
        <ExpenseTable />
      </div>
    );
  }
}

export default Wallet;
