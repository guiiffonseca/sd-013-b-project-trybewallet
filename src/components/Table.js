import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteExpenses } from '../actions/Index';

class Table extends Component {
  renderButton(index1) {
    const { expenses, deleteExpensesDipatch } = this.props;
    return (
      <td>
        <button
          data-testid="delete-btn"
          type="button"
          onClick={ () => {
            const removeExpense = expenses.filter((__, index2) => index1 === index2);
            deleteExpensesDipatch(...removeExpense);
          } }
        >
          Deletar
        </button>
      </td>
    );
  }

  render() {
    const { expenses } = this.props;
    console.log(expenses);
    return (
      <div>
        <table>
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
          <tbody>
            {expenses.map(({
              currency,
              description,
              tag,
              method,
              value,
              exchangeRates,
            }, index) => (
              <tr key={ index }>
                <td>{description}</td>
                <td>{tag}</td>
                <td>{method}</td>
                <td>{value}</td>
                <td>{exchangeRates[currency].name.split('/')[0]}</td>
                <td>{Number(exchangeRates[currency].ask).toFixed(2)}</td>
                <td>{Number(exchangeRates[currency].ask * value).toFixed(2)}</td>
                {expenses ? <td>Real</td> : null}
                {this.renderButton(index)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (disptach) => ({
  deleteExpensesDipatch: (value) => disptach(deleteExpenses(value)),
});

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteExpensesDipatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
