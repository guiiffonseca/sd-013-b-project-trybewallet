import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AddButton from './buttons';
// import { fetchCurrenciesThunk, fetchExpensesThunk } from '../actions';

class ExpensesTable extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = LOCAL_STATE;
  // }

  // componentDidMount() {
  // }

  // renderSubmitButton() {
  //   const { value, method, tag } = this.state;

  //   return (
  //     <AddButton
  //       className="expensives-form-long-inputs"
  //       name="Adicionar despesa"
  //       disabled={ value === '' || method === '' || tag === '' }
  //       onClick={ (event) => this.onClick(event) }
  //     />
  //   );
  // }

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

  editExpensive() {
    console.log('editando...');
  }

  deleteExpensive() {
    console.log('deletando...');
  }

  renderButtons(expense) {
    const { id } = expense;

    return (
      <>
        <AddButton
          id={ id }
          dataTestId="edit-btn"
          className="expensives-form-short-inputs"
          name="Editar despesa"
          onClick={ this.editExpensive }
        />
        <AddButton
          id={ id }
          data-testid="delete-btn"
          className="expensives-form-short-inputs"
          name="Deletar despesa"
          onClick={ this.deleteExpensive }
        />
      </>
    );
  }

  render() {
    const { expenses } = this.props;
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
            {expenses.map((expense) => (
              <tr key={ expense.id }>
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
}.isRequired;

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

// const mapDispatchToProps = (dispatch) => ({
//   dispatchSetCurrencies: () => dispatch(fetchCurrenciesThunk()),
//   dispatchAddExpense: (localState) => dispatch(fetchExpensesThunk(localState)),
// });

export default connect(mapStateToProps /* , mapDispatchToProps */)(ExpensesTable);
