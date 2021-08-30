import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/std/Header';
import Forms from '../components/wallet/Forms';
import Table from '../components/std/Table';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Forms />
        <Table />
      </>
    );
  }
}

export default connect(null, null)(Wallet);
