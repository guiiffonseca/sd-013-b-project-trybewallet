import React from 'react';
import Form from '../components/Form';
import Header from '../components/Header';
import Table from '../components/Table';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <header>
          <Header />
        </header>
        <Form />
        <Table />
      </div>
    );
  }
}

export default Wallet;
