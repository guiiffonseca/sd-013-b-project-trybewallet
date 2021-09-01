import React from 'react';
import FormDespesas from '../components/FormDespesas';
import Header from '../components/Header';

class Wallet extends React.Component {
  render() {
    return (
      <main>
        <Header />
        <FormDespesas />
      </main>
    );
  }
}

export default Wallet;
