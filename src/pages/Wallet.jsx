import React from 'react';
import Header from '../component/Header';
import formAddValue from '../component/formAddValue';
import TableValue from '../component/TableValue';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <Header />
        <formAddValue />
        <TableValue />
        </>
    );
  }
}

export default Wallet;
