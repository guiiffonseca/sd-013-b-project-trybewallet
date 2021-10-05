import React from 'react';
import Forms from '../components/wallet/Forms';
import Header from '../components/wallet/Header';

class Wallet extends React.Component {
  render() {
    return (
      <section>
        <Header />
        <Forms />
      </section>
    );
  }
}

export default Wallet;
