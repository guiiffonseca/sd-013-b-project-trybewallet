import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  getCurrenciesThunk,
  addExpenseThunk,
  confirmEditExpenseThunk,
} from '../actions';

import Input from './Input';
import Select from './Select';

const paymentMethods = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
const tags = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

class ExpenseForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: 'USD',
      method: paymentMethods[0],
      tag: tags[0],
    };

    this.fetchCurrencies = this.fetchCurrencies.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClickAdd = this.handleClickAdd.bind(this);
    this.handleClickEdit = this.handleClickEdit.bind(this);
  }

  componentDidMount() {
    this.fetchCurrencies();
  }

  fetchCurrencies() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value,
    });
  }

  handleClickAdd() {
    const { addExpense } = this.props;
    addExpense(this.state);
    this.setState((prevState) => ({
      id: prevState.id + 1,
    }));
  }

  handleClickEdit() {
    const { confirmEditExpense, idToEdit } = this.props;
    const editExpense = this.state;
    editExpense.id = idToEdit;
    confirmEditExpense(editExpense);
  }

  chooseButton() {
    const { editor } = this.props;

    if (editor) {
      return (
        <button
          type="button"
          onClick={ this.handleClickEdit }
        >
          Editar despesa
        </button>);
    }
    return (
      <button
        type="button"
        onClick={ this.handleClickAdd }
      >
        Adicionar despesa
      </button>);
  }

  render() {
    const { value, description, currency, method, tag } = this.state;
    const { currencies } = this.props;
    return (
      <div>
        <form>
          <Input
            type="number"
            label="Valor"
            name="value"
            value={ value }
            onChange={ this.handleChange }
          />
          <Input
            label="Descrição"
            name="description"
            value={ description }
            onChange={ this.handleChange }
          />
          <Select
            label="Moeda"
            name="currency"
            options={ currencies }
            value={ currency }
            onChange={ this.handleChange }
          />
          <Select
            label="Método de pagamento"
            name="method"
            options={ paymentMethods }
            value={ method }
            onChange={ this.handleChange }
          />
          <Select
            label="Tag"
            name="tag"
            options={ tags }
            value={ tag }
            onChange={ this.handleChange }
          />
          { this.chooseButton() }
        </form>
      </div>
    );
  }
}

ExpenseForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  getCurrencies: PropTypes.func.isRequired,
  addExpense: PropTypes.func.isRequired,
  confirmEditExpense: PropTypes.func.isRequired,
  editor: PropTypes.bool.isRequired,
  idToEdit: PropTypes.number.isRequired,
};

const mapStateToProps = ({ wallet }) => ({
  currencies: wallet.currencies,
  editor: wallet.editor,
  idToEdit: wallet.idToEdit,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(getCurrenciesThunk()),
  addExpense: (state) => dispatch(addExpenseThunk(state)),
  confirmEditExpense: (state) => dispatch(confirmEditExpenseThunk(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseForm);
