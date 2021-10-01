import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PurchaseHeader from './PurchaseTable/PurchaseHeader';
import PurchaseData from './PurchaseTable/PurchaseData';

class PurchaseTable extends React.Component {
  render() {
    const { expenses } = this.props;
    return (
      <div
        id="purchase-table"
      >
        <table>
          <PurchaseHeader />
          { expenses.length > 0 && <PurchaseData /> }
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

PurchaseTable.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, null)(PurchaseTable);
