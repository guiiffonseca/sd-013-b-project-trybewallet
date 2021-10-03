// import axios from 'axios';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  fetchCurrencies as reduxFetchCurrencies,
  setExpense as reduxSetExpense,
  fetchExchangeRates as reduxFetchExchangeRates,
} from '../../actions';
import fetchData from '../../services/services';

class ExpeseForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
      description: '',
      method: 'Cartão de crédito',
      tag: 'Comida',
      currency: 'USD',
    };

    this.renderCurrencies = this.renderCurrencies.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    const { fetchCurrencies } = this.props;
    fetchCurrencies();
  }

  async onClick(e) {
    const { fetchExchangeRates, setExpense } = this.props;
    e.preventDefault();
    const expense = this.state;
    const exchangeRates = await fetchData('https://economia.awesomeapi.com.br/json/all');
    setExpense({ ...expense, exchangeRates });
  }

  handleChange(e) {
    const { target } = e;
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  renderCurrencies(currencies) {
    return (
      <label htmlFor="currency">
        Moeda
        <select name="currency" id="currency" onChange={ this.handleChange }>
          {currencies.map((currency) => (
            <option key={ currency } value={ currency }>
              {currency}
            </option>
          ))}
        </select>
      </label>
    );
  }

  render() {
    const { currencies } = this.props;
    return (
      <form>
        <span>
          <label htmlFor="value">
            Valor
            <input
              type="number"
              name="value"
              id="value"
              onChange={ this.handleChange }
            />
          </label>
        </span>
        <label htmlFor="description">
          Descrição
          <input
            type="text"
            name="description"
            id="description"
            onChange={ this.handleChange }
          />
        </label>

        <label htmlFor="method">
          Método de pagamento
          <select name="method" id="method" onChange={ this.handleChange }>
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>

        {this.renderCurrencies(currencies)}

        <label htmlFor="tag">
          Tag
          <select name="tag" id="tag" onChange={ this.handleChange }>
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
        <button type="submit" onClick={ this.onClick }>Adicionar despesa</button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurrencies: () => dispatch(reduxFetchCurrencies()),
  setExpense: (expense) => dispatch(reduxSetExpense(expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpeseForm);
