import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchExpensesThunk, totalValueAction } from '../actions';

const three = 3;

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      coinsList: [],
      id: 0,
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };

    this.handleClick = this.handleClick.bind(this);
    this.setExpenses = this.setExpenses.bind(this);
  }

  componentDidMount() {
    this.fetchCoins();
  }

  setExpenses(name, newValue) {
    this.setState({ [name]: newValue });
  }

  handleExpenses() {
    const { fetchExpenses } = this.props;
    const { value, description, currency, method, tag, id } = this.state;
    this.setState({ id: id + 1 });
    const expenses = { value, description, currency, method, tag, id };
    fetchExpenses(expenses);
  }

  async fetchCoins() {
    const result = await fetch('https://economia.awesomeapi.com.br/json/all');
    const response = await result.json();
    const Coins = Object.keys(response)
      .filter((coin) => (coin.length <= three));
    this.setState({
      coinsList: Coins,
    });
  }

  handleClick() {
    this.handleExpenses();
  }

  valueInput() {
    const { value } = this.state;
    return (
      <label htmlFor="value">
        Valor:
        <input
          type="text"
          name="value"
          id="value"
          value={ value || 0 }
          onChange={ (event) => this.setExpenses('value', event.target.value) }
        />
      </label>
    );
  }

  currencyInput() {
    const { currency, coinsList } = this.state;
    return (
      <label htmlFor="currency">
        Moeda:
        <select
          type="text"
          name="currency"
          id="currency"
          value={ currency }
          onChange={ (event) => this.setExpenses('currency', event.target.value) }
        >
          {coinsList.map((coin) => (
            <option key={ coin }>
              { coin }
            </option>
          ))}
        </select>
      </label>
    );
  }

  descriptionInput() {
    const { description } = this.state;
    return (
      <label htmlFor="description">
        descrição:
        <textarea
          type="text"
          value={ description }
          name="description"
          id="description"
          onChange={ (event) => this.setExpenses('description', event.target.value) }
        />
      </label>
    );
  }

  methodInput() {
    const { method } = this.state;
    return (
      <label htmlFor="method">
        Método de pagamento:
        <select
          type="text"
          name="method"
          id="method"
          value={ method }
          onChange={ (event) => this.setExpenses('method', event.target.value) }
        >
          <option id="dinheiro">Dinheiro</option>
          <option id="cartão de crédito">Cartão de crédito</option>
          <option id="cartão de débito">Cartão de débito</option>
        </select>
      </label>
    );
  }

  tagInput() {
    const { tag } = this.state;
    return (
      <label htmlFor="tag">
        Tag:
        <select
          type="text"
          name="tag"
          id="tag"
          value={ tag }
          onChange={ (event) => this.setExpenses('tag', event.target.value) }
        >
          <option name="alimentação" id="alimentação">Alimentação</option>
          <option name="lazer" id="lazer">Lazer</option>
          <option name="trabalho" id="trabalho">Trabalho</option>
          <option name="transporte" id="transporte">Transporte</option>
          <option name="saúde" id="saúde">Saúde</option>
        </select>
      </label>
    );
  }

  render() {
    return (
      <div>
        <form>
          {this.valueInput()}
          {this.currencyInput()}
          {this.descriptionInput()}
          {this.methodInput()}
          {this.tagInput()}
        </form>
        <button
          type="button"
          onClick={ () => this.handleClick() }
        >
          Adicionar Despesa
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchExpenses: (expense) => dispatch(fetchExpensesThunk(expense)),
  fetchTotalValue: (payload) => dispatch(totalValueAction(payload)),
});

const mapStateToProps = (state) => ({
  currency: state.wallet.expenses.currency,
  exchangeRates: state.wallet.expenses.exchangeRates,
});

Form.propTypes = {
  fetchExpenses: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
