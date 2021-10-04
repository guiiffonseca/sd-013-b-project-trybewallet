import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import { getCurrencies } from '../actions';

const cabecalho = ['Descrição', 'Tag', 'Método de pagamento', 'Valor', 'Moeda',
  'Câmbio utilizado', 'Valor convertido', 'Moeda de conversão', 'Editar/Excluir'];

class Table extends React.Component {
  loadHeader() {
    return (
      <thead>
        <tr>
          { cabecalho.map((item) => (
            <th key={ item }>
              { item }
            </th>
          )) }
        </tr>
      </thead>
    );
  }

  loadBody() {
    const { expenses } = this.props;
    return (
      <tbody>
        { expenses.map((expense) => (
          <tr key={ expense.id }>
            <td>{ expense.description }</td>
            <td>{ expense.tag }</td>
            <td>{ expense.method }</td>
            <td>{ expense.value }</td>
            <td>{ expense.exchangeRates[expense.currency].name.split('/')[0] }</td>
            <td>{ (+expense.exchangeRates[expense.currency].ask).toFixed(2) }</td>
            <td>
              { (+expense.value * expense.exchangeRates[expense.currency].ask)
                .toFixed(2) }
            </td>
            <td>Real</td>
            <td>{ expense.description }</td>
          </tr>
        )) }
      </tbody>
    );
  }

  render() {
    return (
      <table>
        { this.loadHeader() }
        { this.loadBody() }
      </table>
    );
  }
}

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

/* const mapDispatchToProps = (dispatch) => ({
}); */

export default connect(mapStateToProps)(Table);
