import React from 'react';
import Expenses from './Expenses';
import ExpensesTable from './ExpensesTable';
import Header from './Header';

export default class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <Header />
        <Expenses />
        <ExpensesTable />
      </div>
    );
  }
}
