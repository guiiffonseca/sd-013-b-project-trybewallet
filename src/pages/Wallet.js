import React from 'react';

import WalletForms from '../Components/WalletForms';
import WalletHeader from '../Components/WalletHeader';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <WalletHeader />
        <WalletForms />
      </>
    );
  }
}

export default Wallet;
