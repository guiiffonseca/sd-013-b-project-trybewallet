import React from 'react';
import PurchaseHeader from './PurchaseTable/PurchaseHeader';
import PurchaseData from './PurchaseTable/PurchaseData';

class PurchaseTable extends React.Component {
  render() {
    return (
      <div
        id="purchase-table"
      >
        <table>
          <PurchaseHeader />
          <PurchaseData />
        </table>
      </div>
    );
  }
}

export default PurchaseTable;
