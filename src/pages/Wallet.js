import React from 'react';
import Header from '../components/header';
import FormDespesas from '../components/FormDespesas';
import Table from '../components/Table';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <h2>TrybeWallet</h2>
        <Header />
        <FormDespesas />
        <Table />
      </div>
    );
  }
}

export default Wallet;
