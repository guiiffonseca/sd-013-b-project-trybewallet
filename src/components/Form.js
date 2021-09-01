import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addExpensesThunk, fetchcurrencies } from '../actions';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { addCurrencies } = this.props;
    addCurrencies();
  }

  handleChange({ target }) {
    const { value, name } = target;
    this.setState({ [name]: value });
  }

  handleClick() {
    const { addExpenses } = this.props;
    addExpenses(this.state);
  }

  renderTag(tag) {
    return (
      <label htmlFor="tag">
        Tag:
        <select name="tag" id="tag" onChange={ this.handleChange } value={ tag }>
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
      </label>
    );
  }

  render() {
    const { value, description, currency, method, tag } = this.state;
    const { currencies } = this.props;
    return (
      <fieldset>
        <label htmlFor="valor">
          Valor:
          <input
            type="text"
            name="value"
            id="valor"
            value={ value }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="descricao">
          Descrição:
          <input
            type="text"
            name="description"
            id="descricao"
            value={ description }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="moeda">
          Moeda:
          <select
            name="currency"
            id="moeda"
            onChange={ this.handleChange }
            value={ currency }
          >
            { currencies.map((current) => (
              <option key={ current } value={ current }>{ current }</option>)) }
          </select>
        </label>
        <label htmlFor="met">
          Método de Pagamento:
          <select name="method" id="met" onChange={ this.handleChange } value={ method }>
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de débito">Cartão de débito</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
          </select>
        </label>
        { this.renderTag(tag) }
        <button type="button" onClick={ this.handleClick }>Adicionar despesa</button>
      </fieldset>
    );
  }
}

Form.propTypes = {
  addCurrencies: PropTypes.func.isRequired,
  addExpenses: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  addExpenses: (state) => dispatch(addExpensesThunk(state)),
  addCurrencies: () => dispatch(fetchcurrencies()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
