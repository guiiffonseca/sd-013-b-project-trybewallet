import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setExpenses } from '../../../actions';

class PurchaseTable extends React.Component {
  render() {
    return (
    //  { expenses.map((expense) => (
    //      <tr key={ expense.id }>
    //        <td key={ `${expense.id}-descrição` }>{ expense.description }</td>
    //        <td key={ `${expense.id}-tag` }>{ expense.tag }</td>
    //        <td key={ `${expense.id}-método` }>{ expense.metdod }</td>
    //        <td key={ `${expense.id}-valor` }>{ expense.value }</td>
    //        <td key={ `${expense.id}-moeda` }>{ expense.currency }</td>
    //        <td key={ `${expense.id}-nome da moeda` }>{
    //          expense.exchangeRates[expense.currency].name
    //        }</td>
    //        <td key={ `${expense.id}-câmbio` }>{
    //          expense.exchangeRates[expense.currency].ask
    //        }</td>
    //        <td key={ `${expense.id}-moeda de conversão` }>Real</td>
    //        <td key={ `${expense.id}-cancelar` }>Cancelar compra</td>
    //      </tr>
    //    ))
    //  }
      <p>{0}</p>
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

PurchaseTable.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(PurchaseTable);
