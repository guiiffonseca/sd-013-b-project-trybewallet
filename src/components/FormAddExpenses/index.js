import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  getCurrenciesThunk,
  setExpensesThunk,
  setEditOptions as setEditOptionsAction,
  updateExpenses as updateExpensesAction,
} from '../../actions';
import Input from '../Input';
import Select from '../Select';

const optionsPaymentMethod = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];

const categoryOptions = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

const INITIAL_STATE = {
  value: '',
  description: '',
  currency: 'USD',
  method: 'Dinheiro',
  tag: 'Alimentação',
  isFirstEdition: true,
};

class FormAddExpenses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...INITIAL_STATE,
      id: 0,
    };
    this.handleChanges = this.handleChanges.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleClickEdit = this.handleClickEdit.bind(this);
  }

  componentDidMount() {
    const { setCurrencies } = this.props;
    setCurrencies();
  }

  handleChanges({ target }) {
    const { expenses, expenseIndex } = this.props;
    const { name, value } = target;
    const { isFirstEdition } = this.state;
    if (isFirstEdition) {
      this.setState((state) => ({
        ...expenses[expenseIndex],
        id: state.id,
        isFirstEdition: false }));
    }
    this.setState({
      [name]: value,
    });
  }

  handleClick() {
    const { setExpenses } = this.props;
    const { id } = this.state;
    const newId = id + 1;
    const newExpense = { ...this.state };
    delete newExpense.isFirstEdition;
    setExpenses(newExpense);
    this.setState({ ...INITIAL_STATE, id: newId });
  }

  handleClickEdit() {
    const { expenses, expenseIndex, updateExpenses, setEditOptions } = this.props;
    const alteredExpense = { ...this.state, id: expenses[expenseIndex].id };
    delete alteredExpense.isFirstEdition;
    const newExpenses = [
      ...expenses.slice(0, expenseIndex),
      alteredExpense,
      ...expenses.slice(expenseIndex + 1, expenses.length),
    ];
    updateExpenses(newExpenses);
    setEditOptions({ expenseIndex: -1, isToEditExpense: false });
    this.setState({ ...INITIAL_STATE });
  }

  renderInputs(value, description) {
    return (
      <>
        <Input
          labelText="Valor"
          type="text"
          name="value"
          id="value"
          value={ value }
          onChange={ this.handleChanges }
        />
        <Input
          labelText="Descrição"
          type="text"
          name="description"
          id="description"
          value={ description }
          onChange={ this.handleChanges }
        />
      </>
    );
  }

  renderButton() {
    const { isToEditExpense } = this.props;
    if (isToEditExpense) {
      return (
        <button
          type="button"
          onClick={ this.handleClickEdit }
        >
          Editar despesa
        </button>
      );
    }

    return (
      <button
        type="button"
        onClick={ this.handleClick }
      >
        Adicionar despesa
      </button>
    );
  }

  render() {
    const { isFirstEdition } = this.state;
    const { currencies, expenses, expenseIndex, isToEditExpense } = this.props;
    const {
      value, description, currency, method, tag,
    } = (isToEditExpense && isFirstEdition) ? expenses[expenseIndex] : this.state;
    return (
      <form>
        {this.renderInputs(value, description)}
        <Select
          labelText="Moeda"
          value={ currency }
          name="currency"
          id="currency"
          onChange={ this.handleChanges }
          options={ currencies }
        />
        <Select
          labelText="Método de pagamento"
          value={ method }
          name="method"
          id="method"
          onChange={ this.handleChanges }
          options={ optionsPaymentMethod }
        />
        <Select
          labelText="Tag"
          value={ tag }
          name="tag"
          id="tag"
          onChange={ this.handleChanges }
          options={ categoryOptions }
        />
        {this.renderButton()}
      </form>
    );
  }
}

const mapStateToProps = ({ wallet }) => ({
  currencies: wallet.currencies,
  expenses: wallet.expenses,
  isToEditExpense: wallet.isToEditExpense,
  expenseIndex: wallet.expenseIndex,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrencies: () => dispatch(getCurrenciesThunk()),
  setExpenses: (payload) => dispatch(setExpensesThunk(payload)),
  updateExpenses: (payload) => dispatch(updateExpensesAction(payload)),
  setEditOptions: (payload) => dispatch(setEditOptionsAction(payload)),
});

FormAddExpenses.propTypes = {
  setCurrencies: PropTypes.func.isRequired,
  setExpenses: PropTypes.func.isRequired,
  updateExpenses: PropTypes.func.isRequired,
  setEditOptions: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf,
  expenses: PropTypes.arrayOf.isRequired,
  isToEditExpense: PropTypes.bool.isRequired,
  expenseIndex: PropTypes.number.isRequired,
};

FormAddExpenses.defaultProps = {
  currencies: [],
};

export default connect(mapStateToProps, mapDispatchToProps)(FormAddExpenses);
