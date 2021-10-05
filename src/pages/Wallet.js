import React from 'react';
import Header from '../components/header';
import Forms from '../components/forms';
import Spendtable from '../components/spendtable';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Forms />
        <Spendtable />
      </div>
    );
  }
}

export default Wallet;
