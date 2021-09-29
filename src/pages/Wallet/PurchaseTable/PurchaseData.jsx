import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setExpenses } from '../../actions';

class PurchaseTable extends React.Component {
  render() {
    return(
      <p>Ei, Copini! Tô aqui!</p>
    );
  }
}

        {/* { 
          expenses.map((expense) => (
            <tr key={ expense.id }>
              <th key={ `${expense.id}-descrição` }>{ expense.description }</th>
              <th key={ `${expense.id}-tag` }>{ expense.tag }</th>
              <th key={ `${expense.id}-método` }>{ expense.method }</th>
              <th key={ `${expense.id}-valor` }>{ expense.value }</th>
              <th key={ `${expense.id}-moeda` }>{ expense.currency }</th>
              <th key={ `${expense.id}-nome da moeda` }>{
                expense.exchangeRates[expense.currency].name
              }</th>
              <th key={ `${expense.id}-câmbio` }>{
                expense.exchangeRates[expense.currency].ask
              }</th>
              <th key={ `${expense.id}-moeda de conversão` }>Real</th>
              <th key={ `${expense.id}-cancelar` }>Cancelar compra</th>
            </tr>
          ))
        }   */}


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
