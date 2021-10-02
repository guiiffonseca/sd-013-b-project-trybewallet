import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateExpenses, sumExpenses } from '../../actions';
import PurchaseHeader from './PurchaseTable/PurchaseHeader';
import PurchaseData from './PurchaseTable/PurchaseData';

class PurchaseTable extends React.Component {
  constructor() {
    super();
    this.deleteEntry = this.deleteEntry.bind(this);
  }

  deleteEntry({ target }) {
    const { update, addExpenses, expenses } = this.props;
    const id = target.name;
    const oldExpenses = expenses.concat();
    const DECIMALS = 100;
    addExpenses(
      (-DECIMALS * Number(oldExpenses[id].value)
      * Number(oldExpenses[id].exchangeRates[oldExpenses[id].currency]
        .ask)) / DECIMALS
    );
    oldExpenses.splice(id, 1);
    const newExpenses = oldExpenses;
    update(newExpenses);
  }

  render() {
    const { expenses } = this.props;
    return (
      <div
        id="purchase-table"
      >
        <table>
          <PurchaseHeader />
          { expenses.length > 0 && <PurchaseData deleteEntry={ this.deleteEntry } /> }
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  update: (payload) => dispatch(updateExpenses(payload)),
  addExpenses: (payload) => dispatch(sumExpenses(payload)),
});

PurchaseTable.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  update: PropTypes.func.isRequired,
  addExpenses: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(PurchaseTable);
