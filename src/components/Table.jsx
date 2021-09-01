import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import getCambio from '../globalFuncs/CambioFunc';
import Button from './Button';
import { deleteExpense } from '../actions';

class Table extends React.Component {
  // getCurrencyName(name) {
  //   const realName = name.slice(0, name.indexOf('/'));
  //   return realName;
  // }

  handleDelete(id) {
    const { expenses, remove } = this.props;
    const newExpenses = expenses.filter((expense) => (
      expense.id !== id
    ));
    remove(newExpenses);
  }

  createTr(expense) {
    const { description, tag, method, value, currency, exchangeRates, id } = expense;
    const { ask, name } = exchangeRates[currency];

    return (
      <>
        <td>{ description }</td>
        <td>{ tag }</td>
        <td>{ method }</td>
        <td>{ value }</td>
        <td>{ name }</td>
        <td>{ Math.round(ask * 100) / 100 }</td>
        <td>{ getCambio(value, ask) }</td>
        <td>Real</td>
        <td>
          <Button
            text="Deletar"
            handleClick={ () => this.handleDelete(id) }
            testId="delete-btn"
          />
        </td>
      </>
    );
  }

  render() {
    const { expenses } = this.props;

    return (
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
          { expenses.map((expense) => (
            <tr key={ expense.id }>
              {this.createTr(expense)}
            </tr>
          )) }
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  remove: (expenses) => dispatch(deleteExpense(expenses)),
});

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  remove: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
