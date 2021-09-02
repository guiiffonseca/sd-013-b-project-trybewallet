import React from 'react';

import Header from '../components/Header';
import CurrencyForm from '../components/CurrencyForm';
import ExpensesTable from '../components/ExpensesTable';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <CurrencyForm />
        <ExpensesTable />
      </div>
    );
  }
}

export default Wallet;
