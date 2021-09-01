import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import Label from '../Label';
import {
  fetchCurrencies as fetchCurrenciesThunk,
  saveExpenses,
} from '../../actions';
import payforms from '../../data/payformData';
import tags from '../../data/tagsData';

class ExpenseForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      exchangeRates: {},
    };

    this.handleChange = this.handleChange.bind(this);
    this.sendExpense = this.sendExpense.bind(this);
  }

  componentDidMount() {
    const { fetchCurrencies } = this.props;
    fetchCurrencies();
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  sendExpense() {
    const { addExpense } = this.props;
    addExpense(this.state);
    this.setState({
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      exchangeRates: {},
    });
  }

  renderPayform(method) {
    return (
      <label htmlFor="method" className="select-method">
        Método de pagamento:
        {' '}
        <select
          name="method"
          id="method"
          value={ method }
          onChange={ this.handleChange }
        >
          { payforms.map(({ id, label }) => (
            <option value={ label } key={ id }>{ label }</option>
          ))}
        </select>
      </label>
    );
  }

  renderCurrency(currency) {
    const { currencies } = this.props;
    return (
      <label htmlFor="currency" className="select-currency">
        Moeda:
        {' '}
        <select
          name="currency"
          id="currency"
          value={ currency }
          onChange={ this.handleChange }
        >
          { currencies.map((currencyItem) => (
            <option key={ currencyItem } value={ currencyItem }>{currencyItem}</option>
          ))}
        </select>
      </label>
    );
  }

  renderTag(tag) {
    return (
      <label htmlFor="tag" className="select-tag">
        Tag:
        {' '}
        <select
          name="tag"
          id="tag"
          value={ tag }
          onChange={ this.handleChange }
        >
          { tags.map(({ id, label }) => (
            <option value={ label } key={ id }>{ label }</option>
          ))}
        </select>
      </label>
    );
  }

  render() {
    const { value, description, currency, method, tag } = this.state;
    return (
      <form className="form">
        <div className="row">
          <Label
            text="Valor: "
            type="text"
            name="value"
            placeholder="R$0,00"
            value={ value }
            onChange={ this.handleChange }
            className="clean"
          />
        </div>
        { this.renderCurrency(currency) }
        { this.renderPayform(method) }
        { this.renderTag(tag) }
        <div className="row">
          <Label
            text="Descrição: "
            className="clean"
            type="text"
            name="description"
            value={ description }
            onChange={ this.handleChange }
            placeholder="&nbsp;&nbsp;&nbsp;Ex.: Cachorro quente"
          />
        </div>
        <button
          type="button"
          onClick={ () => this.sendExpense() }
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

ExpenseForm.propTypes = {
  fetchCurrencies: propTypes.func,
}.isRequired;

ExpenseForm.defaultProps = {
  currencies: [],
};

const mapStateToProps = ({ wallet }) => ({
  currencies: wallet.currencies,
  expenses: wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurrencies: () => dispatch(fetchCurrenciesThunk()),
  addExpense: (state) => dispatch(saveExpenses(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseForm);
