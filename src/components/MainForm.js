/* eslint-disable max-lines-per-function */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import fetchTaxas from '../services';
import {
  fetchMoedas as fetchMoedasAction,
  addExpense as addExpenseAction,
} from '../actions';

class MainForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.renderInput = this.renderInput.bind(this);
    this.renderSelect = this.renderSelect.bind(this);
  }

  componentDidMount() {
    const { fetchMoedas } = this.props;
    fetchMoedas();
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  async handleClick() {
    const { expenses, addExpense } = this.props;
    const { value, description, currency, method, tag } = this.state;
    addExpense({
      value,
      description,
      currency,
      method,
      tag,
      id: expenses.length,
      exchangeRates: await fetchTaxas(),
    });
  }

  renderInput() {
    const { value, description } = this.state;
    return (
      <>
        <label htmlFor="value">
          Valor
          <input
            onChange={ this.handleChange }
            name="value"
            value={ value }
            id="value"
            type="text"
          />
        </label>
        <label htmlFor="description">
          Descrição
          <input
            onChange={ this.handleChange }
            name="description"
            value={ description }
            id="description"
            type="text"
          />
        </label>
      </>
    );
  }

  renderSelect() {
    const { currencies } = this.props;
    const { currency, method, tag } = this.state;
    return (
      <>
        <label htmlFor="currency">
          Moeda
          <select
            onChange={ this.handleChange }
            name="currency"
            value={ currency }
            id="currency"
          >
            {(currencies).map((moeda) => (
              <option key={ moeda } value={ moeda }>{moeda}</option>
            ))}
          </select>
        </label>
        <label htmlFor="method">
          Método de pagamento
          <select
            onChange={ this.handleChange }
            name="method"
            value={ method }
            id="method"
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select onChange={ this.handleChange } name="tag" value={ tag } id="tag">
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        <button onClick={ this.handleClick } type="button">Adicionar despesa</button>
      </>
    );
  }

  render() {
    return (
      <form>
        {this.renderInput()}
        {this.renderSelect()}
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  fetchMoedas: () => dispatch(fetchMoedasAction()),
  addExpense: (expense) => dispatch(addExpenseAction(expense)),
});

MainForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  fetchMoedas: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  addExpense: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainForm);
