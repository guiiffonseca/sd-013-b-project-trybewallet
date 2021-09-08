import React from 'react';

import Header from '../components/Header';
import FormAddExpenses from '../components/FormAddExpenses';
import ExpenseTable from '../components/ExpenseTable';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <FormAddExpenses />
        <ExpenseTable />
      </div>
    );
  }
}

export default Wallet;
