import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import SelectCurrencies from './SelectCurrencies';
import SelectPaymentType from './SelectPaymentType';
import SimpleInput from './SimpleInput';
import SelectTagType from './SelectTagType';
import {
  setValue,
  setDescripton,
  setExchangerates,
  setExpenses,
  setExpenseDefaultTag,
  setEditExpense,
} from '../actions';

class WalletForm extends React.Component {
  constructor(props) {
    super(props);

    this.btnAddExpense = this.btnAddExpense.bind(this);
    this.btnEditExpense = this.btnEditExpense.bind(this);
    this.AddNewExpense = this.AddNewExpense.bind(this);
    this.EditOldExpense = this.EditOldExpense.bind(this);
  }

  async AddNewExpense(event) {
    event.preventDefault();
    const { allExpenses, setExpensesFunc, setExpenseDefaultTagFunc } = this.props;
    const urlAPI = 'https://economia.awesomeapi.com.br/json/all';
    const exchangeRates = await (await fetch(urlAPI)).json();
    // https://stackoverflow.com/questions/3455405/how-do-i-remove-a-key-from-a-javascript-object
    delete exchangeRates.USDT;

    const { expense } = this.props;
    const newExpense = { ...expense, id: allExpenses.length, exchangeRates };
    const expenses = allExpenses.concat(newExpense);
    setExpensesFunc(expenses);
    setExpenseDefaultTagFunc();
  }

  EditOldExpense(event) {
    event.preventDefault();
    const {
      setExpenseDefaultTagFunc,
      setEditExpenseFunc,
      editExpense: { id },
      expense,
      allExpenses,
      setExpensesFunc,
    } = this.props;

    const allExpensesAux = allExpenses.map((xpense) => {
      if (xpense.id === id) {
        expense.exchangeRates = { ...xpense.exchangeRates };
        expense.id = id;
        return expense;
      }
      return xpense;
    });

    setExpensesFunc(allExpensesAux);
    setEditExpenseFunc(false);
    setExpenseDefaultTagFunc();
  }

  btnAddExpense() {
    return (
      <button
        type="submit"
        onClick={ this.AddNewExpense }
      >
        Adicionar despesa
      </button>
    );
  }

  btnEditExpense() {
    return (
      <button
        type="submit"
        onClick={ this.EditOldExpense }
      >
        Editar despesa
      </button>
    );
  }

  render() {
    const { expense, setValueFunc, setDescriptonFunc, editExpense } = this.props;
    const { currency, description, method, tag, value } = expense;
    const { shouldEdit } = editExpense;

    return (
      <form>
        <SimpleInput
          value={ value }
          updateState={ setValueFunc }
          label="Valor:"
          id="input-value"
        />
        <SimpleInput
          value={ description }
          updateState={ setDescriptonFunc }
          label="Descrição:"
          id="input-description"
        />
        <SelectCurrencies value={ currency } />
        <SelectPaymentType value={ method } />
        <SelectTagType value={ tag } />
        {!shouldEdit ? this.btnAddExpense() : this.btnEditExpense()}
      </form>
    );
  }
}

WalletForm.propTypes = {
  setValueFunc: PropTypes.func,
  setDescriptonFunc: PropTypes.func,
}.isRequired;

const mapStateToProps = ({ wallet, expense, editExpense }) => ({
  expense,
  allExpenses: wallet.expenses,
  editExpense,
});

const mapDispatchToProps = (dispatch) => ({
  setValueFunc: (value) => dispatch(setValue(value)),
  setDescriptonFunc: (value) => dispatch(setDescripton(value)),
  setExchangeratesFunc: () => dispatch(setExchangerates()),
  setExpensesFunc: (newExpense) => dispatch(setExpenses(newExpense)),
  setExpenseDefaultTagFunc: () => dispatch(setExpenseDefaultTag()),
  setEditExpenseFunc: (newValue) => dispatch(setEditExpense(newValue)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
