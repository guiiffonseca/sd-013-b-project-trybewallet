import React from 'react';

import WalletForms from '../Components/WalletForms';
import WalletHeader from '../Components/WalletHeader';
import WalletTable from '../Components/WalletTable';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <WalletHeader />
        <WalletForms />
        <WalletTable />
      </>
    );
  }
}

export default Wallet;
