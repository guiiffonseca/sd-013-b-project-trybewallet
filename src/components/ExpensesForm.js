import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SelectOptions from './SelectOptions';

import { fetchMoedas as fetchMoedasAct, setExpense as setExpenseAct } from '../actions';

const tagOptionst = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
const expenseFormsOptions = [
  'Dinheiro',
  'Cartão de crédito',
  'Cartão de débito',
];

class ExpenseForms extends React.Component {
  constructor() {
    super();

    this.state = {
      expense: '',
      description: '',
      currency: '',
      method: '',
      tag: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.renderSelects = this.renderSelects.bind(this);
    this.handleClickSubmit = this.handleClickSubmit.bind(this);
    this.createExpense = this.createExpense.bind(this);
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value,
    });
  }

  createExpense() {
    const { expense, description, currency, method, tag } = this.state;
    const { expensesStore, setExpense, moedas } = this.props;
    const idNUmber = (expensesStore.length > 0 ? expensesStore.length : 0);
    const exchangeRates = moedas;
    const expenseObj = { id: idNUmber,
      value: expense,
      description,
      currency,
      method,
      tag,
      exchangeRates };
    const payload = expensesStore.concat(expenseObj);
    return setExpense(payload);
  }

  handleClickSubmit() {
    const { fetchMoedas } = this.props;
    fetchMoedas();
    this.createExpense();
  }

  renderSelects() {
    const { moedasArray } = this.props;
    const { currency, method, tag } = this.state;
    const currencyOptions = moedasArray;
    return (
      <>
        <label htmlFor="currency">
          Moeda
          <select
            name="currency"
            id="currency"
            value={ currency }
            onChange={ this.handleChange }
          >
            {currencyOptions.map((crr) => (
              <SelectOptions info={ crr } key={ crr } />
            ))}
          </select>
        </label>
        <label htmlFor="method">
          Método de pagamento
          <select
            name="method"
            id="method"
            value={ method }
            onChange={ this.handleChange }
          >
            {expenseFormsOptions.map((crr) => (
              <SelectOptions info={ crr } key={ crr } />
            ))}
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select name="tag" id="tag" value={ tag } onChange={ this.handleChange }>
            {tagOptionst.map((crr) => (
              <SelectOptions key={ crr } info={ crr } />
            ))}
          </select>
        </label>
      </>
    );
  }

  render() {
    const { expense, description } = this.state;
    // const { fetchMoedas } = this.props;
    return (
      <form>
        <label htmlFor="expense">
          Valor:
          <input
            type="number"
            name="expense"
            id="expense"
            value={ expense }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="description">
          Descrição
          <input
            type="text"
            name="description"
            id="description"
            value={ description }
            onChange={ this.handleChange }
          />
        </label>
        {this.renderSelects()}
        <button
          type="button"
          onClick={ this.handleClickSubmit }
        >
          Adicionar Despesa
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  moedasArray: state.wallet.currencies,
  loading: state.wallet.loading,
  expensesStore: state.wallet.expenses,
  moedas: state.wallet.moedas,
});

const mapDispatchToProps = (dispatch) => ({
  fetchMoedas: () => dispatch(fetchMoedasAct()),
  setExpense: (payload) => dispatch(setExpenseAct(payload)),
});

ExpenseForms.propTypes = {
  moedasArray: PropTypes.arrayOf(PropTypes.string).isRequired,
  expensesStore: PropTypes.arrayOf(PropTypes.object).isRequired,
  moedas: PropTypes.objectOf(PropTypes.object).isRequired,
  setExpense: PropTypes.func.isRequired,
  fetchMoedas: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseForms);
