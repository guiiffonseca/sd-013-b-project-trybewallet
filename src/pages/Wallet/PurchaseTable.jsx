import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setExpenses } from '../../actions';

class PurchaseTable extends React.Component {
  render() {
    const { expenses } = this.props;
    return (
      <div
        id="purchase-table"
      >
        <table>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </table>
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

PurchaseTable.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(PurchaseTable);
