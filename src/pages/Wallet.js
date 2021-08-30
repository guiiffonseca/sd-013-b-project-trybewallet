import React from 'react';

import { Header, ExpensesForm } from '../components';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <Header />
        <main>
          <ExpensesForm />
        </main>
      </>
    );
  }
}

export default Wallet;
