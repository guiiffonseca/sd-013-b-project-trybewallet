import React from 'react';
import Form from './Wallet/Form';
import Header from './Wallet/Header';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Form />
      </div>
    );
  }
}

export default Wallet;
