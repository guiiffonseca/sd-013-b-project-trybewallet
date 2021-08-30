import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Input from '../Input';
import Select from '../Select';

import {
  setExpenseThunk,
  fetchCurrencies as fetchCurrenciesThunk,
} from '../../actions';

const tags = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

const paymentMethods = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];

const INITIAL_STATE = {
  value: '',
  description: '',
  currency: 'USD',
  paymentMethod: '',
  tag: '',
};

class CurrencyForm extends Component {
  constructor() {
    super();

    this.state = INITIAL_STATE;

    this.setEditInfo = this.setEditInfo.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.fetchCurrencies = this.fetchCurrencies.bind(this);
    this.renderInputs = this.renderInputs.bind(this);
    this.renderSelects = this.renderSelects.bind(this);
  }

  componentDidMount() {
    this.fetchCurrencies();
  }

  setEditInfo() {
    const { idToEdit, expenses } = this.props;
    const { value, description, currency, paymentMethod, tag } = expenses[idToEdit];

    this.setState({
      value,
      description,
      currency,
      paymentMethod,
      tag,
    });
  }

  async fetchCurrencies() {
    const { fetchCurrencies } = this.props;

    await fetchCurrencies();
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value,
    });
  }

  handleClick(event) {
    event.preventDefault();

    const { setExpense, expenses } = this.props;
    const { value, description, currency, paymentMethod, tag } = this.state;

    setExpense({
      id: expenses.length,
      value,
      description,
      currency,
      method: paymentMethod,
      tag,
    });

    this.setState(INITIAL_STATE);
  }

  renderInputs() {
    const { value, description } = this.state;

    return (
      <>
        <Input
          labelText="Valor"
          placeholder="0"
          type="number"
          name="value"
          id="value"
          value={ value }
          onChange={ this.handleChange }
        />

        <Input
          labelText="Descrição"
          placeholder="descrição"
          type="text"
          name="description"
          id="description"
          value={ description }
          onChange={ this.handleChange }
        />
      </>
    );
  }

  renderSelects() {
    const { currency, paymentMethod, tag } = this.state;
    const { currencies } = this.props;

    return (
      <>
        <Select
          labelText="Moeda"
          name="currency"
          id="currency"
          value={ currency }
          onChange={ this.handleChange }
          options={ currencies }
        />

        <Select
          labelText="Método de pagamento"
          placeholder="método de pagamento"
          name="paymentMethod"
          id="paymentMethod"
          value={ paymentMethod }
          onChange={ this.handleChange }
          options={ paymentMethods }
        />

        <Select
          labelText="Tag"
          placeholder="tag"
          name="tag"
          id="tag"
          value={ tag }
          onChange={ this.handleChange }
          options={ tags }
        />
      </>
    );
  }

  render() {
    const { editor } = this.props;

    return (
      <form>
        {this.renderInputs()}
        {this.renderSelects()}
        {editor ? (
          <button type="submit" onClick={ this.handleClick }>
            Editar despesa
          </button>
        ) : (
          <button type="submit" onClick={ this.handleClick }>
            Adicionar despesa
          </button>
        )}
      </form>
    );
  }
}

CurrencyForm.propTypes = {
  setExpense: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  fetchCurrencies: PropTypes.func.isRequired,
  editor: PropTypes.bool,
  idToEdit: PropTypes.number,
};

CurrencyForm.defaultProps = {
  editor: false,
  idToEdit: 0,
};

const mapStateToProps = ({ wallet }) => ({
  expenses: wallet.expenses,
  currencies: wallet.currencies,
  editor: wallet.editor,
  idToEdit: wallet.idToEdit,
});

const mapDispatchToProps = (dispatch) => ({
  setExpense: (expense) => dispatch(setExpenseThunk(expense)),
  fetchCurrencies: (expense) => dispatch(fetchCurrenciesThunk(expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyForm);
