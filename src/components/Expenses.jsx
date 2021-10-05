import PropTypes, { func, shape, number } from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { updateExpenses, UPDATE_EXPENSES } from '../actions/updateExpenses';

class Expenses extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelClick = this.handleDelClick.bind(this);
    this.handleEditClick = this.handleEditClick.bind(this);
  }

  handleEditClick() {
    // const { expenses, updateAction } = this.props;
    // console.log(expenses);
    // const edited = {
    //   id,
    //   // estadosDosInputsAqui,
    // };
    // const expensesArray = expenses.expenses.map((exp) => {
    //   return exp.id === id ? edited : exp;
    // });
    // updateAction(expensesArray);
  }

  handleDelClick(id) {
    const { expenses, updateAction } = this.props;
    const expensesArray = expenses.expenses.filter((exp) => exp.id !== id);
    updateAction(expensesArray);
    // updateAction(expensesArray);
  }

  walletButons(expense, deleteFn, editFn) {
    return (
      <td>
        <button type="button" onClick={ () => editFn(expense.id) }>Editar</button>
        <button
          type="button"
          data-testid="delete-btn"
          onClick={ () => deleteFn(expense.id) }
        >
          Excluir
        </button>
      </td>
    );
  }

  handleTableHead() {
    return (
      <thead>
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
      </thead>
    );
  }

  render() {
    const { expenses } = this.props;
    return (
      <table>
        { this.handleTableHead() }
        <tbody>
          {/* feito com ajuda do John Torres */}
          {/* refatorado na monitoria, a tbody não renderizava
          mas o requisito estava passando */}
          {
            expenses.length !== 0
            && expenses.expenses.map((expense) => (
              <tr key={ expense.id }>
                <td>{expense.description}</td>
                <td>{expense.tag}</td>
                <td>{expense.method}</td>
                <td>{expense.value}</td>
                <td>{expense.exchangeRates[expense.currency].name.split('/')[0]}</td>
                <td>
                  {
                    parseFloat(expense.exchangeRates[expense.currency].ask).toFixed(2)
                  }
                </td>
                <td>
                  {parseFloat(expense.value * expense.exchangeRates[expense.currency].ask)
                    .toFixed(2)}
                </td>
                <td>Real</td>
                {this.walletButons(
                  expense,
                  this.handleDelClick,
                  this.handleEditClick,
                )}
              </tr>
            ))
          }
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet,
});

const mapDispatchToProps = (dispatch) => ({
  updateAction: (expenses) => dispatch(updateExpenses(expenses)),
});

// function mapStateToProps(state) {
//   return {
//     expenses: state.wallet.expenses,
//   };
// }

Expenses.propTypes = {
  expenses: shape({
    expenses: shape({
      filter: func,
      map: func
    }),
    length: number
  }),
  updateAction: func,
}.isRequired,

export default connect(mapStateToProps, mapDispatchToProps)(Expenses);
