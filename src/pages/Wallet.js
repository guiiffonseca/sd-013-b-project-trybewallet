import React from 'react';
import Header from '../components/Header';
import Form from '../components/Form';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <h2>TrybeWallet</h2>
        <Header />
        <Form />
      </div>);
  }
}

export default Wallet;
