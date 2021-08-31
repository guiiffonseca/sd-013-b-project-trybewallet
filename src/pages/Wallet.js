import React from 'react';

import ExpenseForm from '../components/ExpenseForm';
import ExpenseTable from '../components/ExpenseList';
import Header from '../components/Header';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <ExpenseForm />
        <ExpenseTable />
      </div>
    );
  }
}

export default Wallet;
