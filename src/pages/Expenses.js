import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import fetchApi from '../services/api';
import { getCurrencyThunk, renderCoins } from '../actions/index';

class Expenses extends Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
    this.renderCoins = this.renderCoins.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.fetchCoins();
  }

  async fetchCoins() {
    const data = await fetchApi();
    const response = Object.keys(data);
    response.splice(response.indexOf('USDT'), 1);
    const { dispatchCoins } = this.props;
    dispatchCoins(response);
  }

  handleChange({ target }) {
    const { name } = target;
    this.setState({
      [name]: target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { dispatchSetThunk } = this.props;
    const { id } = this.state;
    this.setState((state) => ({
      id: state.id + 1,
    }));
    const expenses = { ...this.state, id };
    dispatchSetThunk(expenses);
  }

  renderCoins() {
    const { coins } = this.props;
    if (coins !== undefined) {
      return (
        <label htmlFor="currency">
          Moeda
          <select onChange={ this.handleChange } id="currency" name="currency">
            {coins.map((name, index) => (
              <option key={ index } value={ name }>{name}</option>
            ))}
          </select>
        </label>
      );
    } return null;
  }

  render() {
    return (
      <section>
        <form onSubmit={ this.handleSubmit }>
          <label htmlFor="value">
            Valor:
            <input onChange={ this.handleChange } type="text" name="value" id="value" />
          </label>

          <label htmlFor="description">
            Descrição
            <input
              id="description"
              type="text"
              name="description"
              onChange={ this.handleChange }
            />
          </label>
          { this.renderCoins() }

          <label onChange={ this.handleChange } htmlFor="method">
            Método de pagamento:
            <select id="method" name="method">
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
          </label>

          <label htmlFor="tag">
            Tag:
            <select onChange={ this.handleChange } id="tag" name="tag">
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>
          </label>
          <button type="submit">Adicionar despesa</button>
        </form>
      </section>
    );
  }
}

Expenses.propTypes = {
  coins: PropTypes.shape({
    map: PropTypes.func,
  }).isRequired,
  dispatchCoins: PropTypes.func.isRequired,
  dispatchSetThunk: PropTypes.func.isRequired,
  map: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  dispatchSetThunk: (value) => dispatch(getCurrencyThunk(value)),
  dispatchCoins: (value) => dispatch(renderCoins(value)),
});

const mapStateToProps = (state) => ({
  coins: state.wallet.coins,
  expenses: state.wallet.expenses,
  id: state.wallet.expenses.length,
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps, mapDispatchToProps)(Expenses);
