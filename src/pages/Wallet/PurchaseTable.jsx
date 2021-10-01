import React from 'react';
import PurchaseHeader from './PurchaseTable/PurchaseHeader';
import PurchaseData from './PurchaseTable/PurchaseData';
import { connect } from 'react-redux';

class PurchaseTable extends React.Component {
  render() {
    const { expenses } = this.props;
    return (
      <div
        id="purchase-table"
      >
        <table>
          <PurchaseHeader />
          { expenses.length > 0 ? <PurchaseData /> : false }
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(PurchaseTable);
