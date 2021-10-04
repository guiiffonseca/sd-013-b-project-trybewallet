import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { delExpenses } from '../actions';

const cabecalho = ['Descrição', 'Tag', 'Método de pagamento', 'Valor', 'Moeda',
  'Câmbio utilizado', 'Valor convertido', 'Moeda de conversão', 'Editar/Excluir'];

class Table extends React.Component {
  showCrudButtons(expense) {
    const { removeExpense } = this.props;
    return (
      <div>
        <button type="button">Edit</button>
        <button
          type="button"
          data-testid="delete-btn"
          onClick={ () => removeExpense(expense) }
        >
          Del
        </button>
      </div>
    );
  }

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
            <td>{ this.showCrudButtons(expense) }</td>
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
  removeExpense: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  removeExpense: (expense) => dispatch(delExpenses(expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
