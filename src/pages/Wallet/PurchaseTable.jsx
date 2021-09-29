import React from 'react';
import { connect } from 'react-redux';
import { setExpenses } from '../../actions';

class PurchaseTable extends React.Component {
  render() {
    const { expenses } = this.props;
    return (
      <div>
        {expenses.length}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  saveExpenses: (payload) => dispatch(setExpenses(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PurchaseTable);