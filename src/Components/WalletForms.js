import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import CoinApiFilter from './CoinApiFilter';
import { fetchExchangesThunk } from '../actions';

class WalletForms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      description: '',
      method: '',
      tag: '',
      currency: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value,
    });
  }

  async handleSubmit() {
    const { value, description, method, tag, currency } = this.state;
    const { setExpenses, expenses } = this.props;

    setExpenses({
      id: expenses.length,
      value,
      currency,
      method,
      tag,
      description,
    });
  }

  render() {
    const { value, description, method, tag, currency } = this.state;
    return (
      <form>
        <label htmlFor="value">
          Valor:
          <input
            type="text"
            id="value"
            value={ value }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="description">
          Descrição:
          <input
            type="text"
            id="description"
            value={ description }
            onChange={ this.handleChange }
          />
        </label>
        <CoinApiFilter currency={ currency } func={ this.handleChange } />
        <label htmlFor="method">
          Método de pagamento:
          <select id="method" value={ method } onChange={ this.handleChange }>
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag:
          <select id="tag" value={ tag } onChange={ this.handleChange }>
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        <button
          type="button"
          onClick={ this.handleSubmit }
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

WalletForms.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  setExpenses: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
  exchangeRates: state.wallet.exchangeRates,
});

const mapDispatchToProps = (dispatch) => ({
  setExpenses: (expenses) => dispatch(fetchExchangesThunk(expenses)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WalletForms);
