import React from 'react';

import { Header, ExpensesForm, ExpensesTable } from '../components';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <Header />
        <main>
          <ExpensesForm />
          <ExpensesTable />
        </main>
      </>
    );
  }
}

export default Wallet;
