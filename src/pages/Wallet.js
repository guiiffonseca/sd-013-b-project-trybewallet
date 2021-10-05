import React from 'react';
import Forms from '../components/wallet/Forms';
import Header from '../components/wallet/Header';
import Table from '../components/wallet/Table';

class Wallet extends React.Component {
  render() {
    return (
      <section>
        <Header />
        <Forms />
        <Table />
      </section>
    );
  }
}

export default Wallet;
