import React from 'react';
import FormAddExpenses from '../components/FormAddExpenses';

import Header from '../components/Header';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <FormAddExpenses />
      </div>
    );
  }
}

export default Wallet;
