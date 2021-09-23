import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../Styles/ExpensesTable.css';
import { connect } from 'react-redux';
import { deleteExpenseAction } from '../actions';

class ExpensesTable extends Component {
  constructor() {
    super();
    this.deleteExpense = this.deleteExpense.bind(this);
  }

  deleteExpense() {
    const { expense: { exchangeRates,
      currency, value, id } } = this.props;
    const { deleteExpenses, expenses, despesas } = this.props;
    // calculo da despesa
    const currencies = Object.values(exchangeRates);
    const correctCurrency = currencies.filter((curr) => curr.code === currency);
    const calc = Number(value) * correctCurrency[0].ask;
    const precision = 100;
    const correctExpense = parseInt(calc * precision, 10) / precision;
    const novaDespesa = parseInt((despesas - correctExpense) * precision, 10) / precision;
    const despesaCorrecta = novaDespesa > 0 ? novaDespesa : 0;
    // filtro
    const expensesArray = expenses;
    const arrayFiltered = expensesArray.filter((exp) => exp.id !== id);
    deleteExpenses(arrayFiltered, despesaCorrecta);
  }

  render() {
    const { expense: { exchangeRates,
      currency, description, tag, method, value } } = this.props;
    const changes = {
      USD: 'Dólar Comercial',
      CAD: 'Dólar Canadense',
      EUR: 'Euro',
      GBP: 'Libra Esterlina',
      ARS: 'Peso',
      BTC: 'Bitcoin',
      LTC: 'Litecoin',
      JPY: 'Yen',
      CHF: 'Swiss',
      AUD: 'Dólar Australiano',
      CNY: 'Yuan',
      ILS: 'Israeli New Shekew',
      ETH: 'Ethereum',
      XRP: 'Riple',
    };
    const currencies = Object.values(exchangeRates);
    const correctCurrency = currencies.filter((curr) => curr.code === currency);
    const calc = Number(value) * correctCurrency[0].ask;
    const precision = 100;
    const correctExpense = parseInt(calc * precision, 10) / precision;
    const cambio = currencies.filter((exc) => exc.code === currency)[0].ask;
    return (
      <tr>
        <td>{description}</td>
        <td>{tag }</td>
        <td>{method }</td>
        <td>{`${parseInt(value, 10)}`}</td>
        <td>{changes[currency]}</td>
        <td>{parseFloat(cambio).toFixed(2)}</td>
        <td>{correctExpense}</td>
        <td>Real</td>
        <td>
          <button
            type="button"
            data-testid="delete-btn"
            className="delete-button"
            onClick={ this.deleteExpense }
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  deleteExpenses: (expenses, despesas) => dispatch(
    deleteExpenseAction(expenses, despesas),
  ),
});

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
  despesas: state.wallet.despesas,
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesTable);

ExpensesTable.propTypes = {
  expense: PropTypes.objectOf(PropTypes.string).isRequired,
  deleteExpenses: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.string).isRequired,
  despesas: PropTypes.number.isRequired,
};
