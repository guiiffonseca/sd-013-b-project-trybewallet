import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCurrencyThunk, listExpenses } from '../../actions/index';
import ItemList from './ItemList';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
    this.handleChange = this.handleChange.bind(this);
    this.createExpense = this.createExpense.bind(this);
  }

  FormInputText(value, text, name, handle) {
    return (
      <label htmlFor={ name }>
        {text}
        <input
          type="text"
          name={ name }
          value={ value }
          id={ name }
          onChange={ handle }
        />
      </label>
    );
  }

  tagLabel() {
    return (
      <label htmlFor="tag">
        Tag
        <select name="tag" id="tag" onChange={ this.handleChange }>
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Saúde">Saúde</option>
          <option value="Transporte">Transporte</option>
        </select>
      </label>
    );
  }

  labellabel() {
    return (
      <label htmlFor="method">
        Método de Pagamento
        <select name="method" id="method" onChange={ this.handleChange }>
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
      </label>);
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value,
    });
  }

  createExpense() {
    const { id } = this.state;
    const { exchangeRates } = this.props;
    this.setState({
      id: id + 1,
    });
    const { saveExpenses, attCurrencyThunk } = this.props;
    attCurrencyThunk();
    saveExpenses({ ...this.state, exchangeRates });
  }

  render() {
    const { currencies, expensesList } = this.props;
    const { value, description } = this.state;
    return (
      <form>
        {this.FormInputText(value, 'Valor', 'value', this.handleChange)}
        {this.FormInputText(description, 'Descrição', 'description', this
          .handleChange)}
        <label htmlFor="currency">
          Moeda
          <select
            name="currency"
            id="currency"
            onChange={ this.handleChange }
          >
            {currencies.map((currencie) => (
              <option
                value={ currencie }
                key={ currencie }
              >
                {currencie}
              </option>
            ))}
          </select>
        </label>
        {this.tagLabel()}
        {this.labellabel()}
        <button type="button" onClick={ this.createExpense }>Adicionar despesas</button>
        <table>
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
          {expensesList.length === 0 ? null : expensesList
            .map((item,
              index) => <ItemList item={ item } key={ index } id={ index } />)}
        </table>
      </form>
    );
  }
}

Form.propTypes = {
  attCurrencyThunk: PropTypes.func.isRequired,
  currencies: PropTypes.shape({
    map: PropTypes.func.isRequired,
  }).isRequired,
  exchangeRates: PropTypes.string.isRequired,
  expenses: PropTypes.shape({
    map: PropTypes.func.isRequired,
  }).isRequired,
  expensesList: PropTypes.func.isRequired,
  saveExpenses: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  expensesList: state.wallet.expenses,
  exchangeRates: state.wallet.currencies,
});
const mapDispatchToProps = (dispatch) => ({
  saveExpenses: (value) => dispatch(listExpenses(value)),
  attCurrencyThunk: () => dispatch(getCurrencyThunk()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
