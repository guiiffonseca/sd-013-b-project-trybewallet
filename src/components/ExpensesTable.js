import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  setExpenses,
  setValue,
  setDescripton,
  setCurrency,
  setPayment,
  setTag,
  setIDEdit,
  setEditExpense,
} from '../actions';

const headers = [
  'Descrição',
  'Tag',
  'Método de pagamento',
  'Valor',
  'Moeda',
  'Câmbio utilizado',
  'Valor convertido',
  'Moeda de conversão',
  'Editar/Excluir',
];

class ExpensesTable extends React.Component {
  constructor(props) {
    super(props);

    this.deleteExpense = this.deleteExpense.bind(this);
    this.editExpense = this.editExpense.bind(this);
  }

  formatedValues(xpense) {
    const { description, tag, method, value, currency, exchangeRates } = xpense;

    const currencyFullName = exchangeRates[currency].name.split('/')[0];
    const convertedValue = (value * exchangeRates[currency].ask).toFixed(2);
    const currencyBase = 'Real';
    const currencyValue = parseFloat(exchangeRates[currency].ask).toFixed(2);

    const novaOrdem = [
      description,
      tag,
      method,
      value,
      currencyFullName,
      currencyValue,
      convertedValue,
      currencyBase,
    ];
    return (novaOrdem.map((item) => <td key={ item }>{item}</td>));
  }

  deleteExpense({ target }) {
    const { setExpensesFunc, allExpenses } = this.props;
    const newExpenses = allExpenses
      .filter((expense) => expense.id !== parseInt(target.id, 10));
    setExpensesFunc(newExpenses);
  }

  editExpense({ target }) {
    const {
      allExpenses,
      setValueFunc,
      setDescriptonFunc,
      setCurrencyFunc,
      setPaymentFunc,
      setTagFunc,
      setEditExpenseFunc,
      setIDEditFunc,
    } = this.props;

    const editExpense = allExpenses
      .find((expense) => expense.id === parseInt(target.id, 10));
    const {
      currency,
      description,
      method,
      tag,
      value,
      id,
    } = editExpense;

    setValueFunc(value);
    setDescriptonFunc(description);
    setCurrencyFunc(currency);
    setPaymentFunc(method);
    setTagFunc(tag);
    setEditExpenseFunc(true);
    setIDEditFunc(id);
  }

  render() {
    const { allExpenses } = this.props;

    return (
      <table>
        <tr>
          {headers.map((header) => <th key={ header }>{header}</th>)}
        </tr>
        {allExpenses.map((expense) => (
          <tr key={ expense }>
            {this.formatedValues(expense)}
            <div>
              <button
                type="button"
                id={ expense.id }
                data-testid="edit-btn"
                onClick={ this.editExpense }
              >
                Editar
              </button>
              <button
                type="button"
                id={ expense.id }
                data-testid="delete-btn"
                onClick={ this.deleteExpense }
              >
                Excluir
              </button>
            </div>
          </tr>
        ))}
      </table>
    );
  }
}

ExpensesTable.propTypes = {
  allExpenses: PropTypes.object,
}.isRequired;

const mapStateToProps = ({ wallet }) => ({
  allExpenses: wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  setExpensesFunc: (newXpenses) => dispatch(setExpenses(newXpenses)),
  setValueFunc: (newValue) => dispatch(setValue(newValue)),
  setDescriptonFunc: (newDescripton) => dispatch(setDescripton(newDescripton)),
  setCurrencyFunc: (newCurrency) => dispatch(setCurrency(newCurrency)),
  setPaymentFunc: (newPayment) => dispatch(setPayment(newPayment)),
  setTagFunc: (newTag) => dispatch(setTag(newTag)),
  setEditExpenseFunc: (newValue) => dispatch(setEditExpense(newValue)),
  setIDEditFunc: (newID) => dispatch(setIDEdit(newID)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesTable);
