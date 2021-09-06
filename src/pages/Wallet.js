import React from 'react';
import AddExpensesForm from '../components/AddExpensesForm';
import ExpensesTable from '../components/ExpensesTable';
import Header from '../components/Header';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <Header />
        <main className="wallet-main main">
          <AddExpensesForm />
          <ExpensesTable />
        </main>
      </>
    );
  }
}

export default Wallet;
