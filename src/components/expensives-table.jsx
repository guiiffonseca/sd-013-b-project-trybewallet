import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AddButton from './buttons';
import { removeExpense } from '../actions';

class ExpensesTable extends Component {
  currencyName(expense) {
    const { currency, exchangeRates } = expense;
    return exchangeRates[currency].name;
  }

  currencyRate(expense) {
    const { currency, exchangeRates } = expense;
    const result = parseFloat(exchangeRates[currency].ask);
    return result.toFixed(2);
  }

  exchangeValue(expense) {
    const { value, currency, exchangeRates } = expense;
    const result = parseFloat(value) * exchangeRates[currency].ask;
    return result.toFixed(2);
  }

  editExpense(id) {
    console.log('editando...', id);
  }

  deleteExpense(id) {
    const { expenses, dispatchDeleteExpense } = this.props;
    const updatedExpenses = expenses;
    updatedExpenses.splice(id, 1);
    dispatchDeleteExpense(updatedExpenses);

    const inputedExpense = document.getElementById(id);
    inputedExpense.remove();
  }

  renderButtons(expense) {
    const { id } = expense;

    return (
      <>
        <AddButton
          dataTestId="edit-btn"
          className="expensives-form-long-inputs"
          name="Editar despesa"
          onClick={ () => this.editExpense(id) }
        />
        <AddButton
          dataTestId="delete-btn"
          className="expensives-form-long-inputs"
          name="Deletar despesa"
          onClick={ () => this.deleteExpense(id) }
        />
      </>
    );
  }

  render() {
    const { expenses } = this.props;
    return (
      <div>
        <table id="expenses-table">
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
            {expenses.map((expense) => (
              <tr id={ expense.id } key={ expense.id }>
                <td>{expense.description}</td>
                <td>{expense.tag}</td>
                <td>{expense.method}</td>
                <td>{expense.value}</td>
                <td>{this.currencyName(expense)}</td>
                <td>{this.currencyRate(expense)}</td>
                <td>{this.exchangeValue(expense)}</td>
                <td>Real</td>
                <td>{this.renderButtons(expense)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

ExpensesTable.propTypes = {
  expenses: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.array]),
  ),
  dispatchDeleteExpense: PropTypes.func,
}.isRequired;

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchDeleteExpense: (newState) => dispatch(removeExpense(newState)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesTable);
