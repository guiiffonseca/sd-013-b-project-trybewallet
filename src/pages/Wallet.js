import React from 'react';
import ExpensesTable from './Wallet/ExpensesTable';
import Form from './Wallet/Form';
import Header from './Wallet/Header';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Form />
        <ExpensesTable />
      </div>
    );
  }
}

export default Wallet;
