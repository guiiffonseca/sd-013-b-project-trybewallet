import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  getExchangeRates as getExchangeRatesAction,
  setExpenses as setExpensesAction,
} from '../actions';

class WalletForm extends React.Component {
  constructor(props) {
    super(props);
    const { exchangeRatesProps } = props;
    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      exchangeRates: exchangeRatesProps || {},
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.renderSelectCurrency = this.renderSelectCurrency.bind(this);
  }

  handleChange(event, id) {
    const eventValue = event.target.value;
    this.setState((prevState) => ({
      ...prevState,
      [id]: eventValue,
    }));
  }

  async handleClick(event) {
    const {
      handleUpdateTotal,
      setExpenses,
      expenses,
    } = this.props;
    const { value, currency } = this.state;
    event.preventDefault();
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const result = await response.json();
    this.setState((prevState) => (
      {
        ...prevState,
        id: expenses.length === 0 ? 0 : expenses[expenses.length - 1].id + 1,
        exchangeRates: result,
      }));
    console.log(result[currency].ask);
    handleUpdateTotal(value * result[currency].ask);
    setExpenses(this.state);
  }

  renderInput({ name, label, id, type, value, stateKey }) {
    return (
      <label htmlFor={ id }>
        {label}
        <input
          id={ id }
          name={ name }
          type={ type }
          value={ value }
          onChange={ (event) => this.handleChange(event, stateKey) }
        />
      </label>
    );
  }

  renderSelectCurrency({ currency, currencies }) {
    return (
      <label htmlFor="currency">
        Moeda
        <select
          id="currency"
          name="moeda"
          value={ currency }
          onChange={ (event) => this.handleChange(event, 'currency') }
        >
          {currencies.map((currencyValue) => (
            <option key={ currencyValue } value={ currencyValue }>
              {currencyValue}
            </option>
          ))}
        </select>
      </label>
    );
  }

  renderSelectPayment({ method }) {
    return (
      <label htmlFor="payment-method">
        Método de pagamento
        <select
          id="payment-method"
          name="método de pagamento"
          value={ method }
          onChange={ (event) => this.handleChange(event, 'method') }
        >
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
      </label>
    );
  }

  renderSelectCategory({ tag }) {
    return (
      <label htmlFor="category">
        Tag
        <select
          id="category"
          name="tag"
          value={ tag }
          onChange={ (event) => this.handleChange(event, 'tag') }
        >
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
      </label>
    );
  }

  renderForm() {
    const { currencies } = this.props;
    const { value, description, currency, method, tag } = this.state;
    return (
      <form>
        {this.renderInput({
          label: 'Valor',
          id: 'value',
          name: 'valor',
          type: 'number',
          value,
          stateKey: 'value',
        })}
        {this.renderInput({
          label: 'Descrição',
          id: 'description',
          name: 'descrição',
          type: 'text',
          value: description,
          stateKey: 'description',
        })}
        {this.renderSelectCurrency({ currency, currencies })}
        {this.renderSelectPayment({ method })}
        {this.renderSelectCategory({ tag })}
        <button name="adicionar despesa" type="submit" onClick={ this.handleClick }>
          Adicionar despesa
        </button>
      </form>
    );
  }

  render() {
    return this.renderForm();
  }
}

const mapStateToProps = ({
  wallet: { currencies, expenses, exchangeRates },
}) => ({
  currencies,
  expenses,
  exchangeRatesProp: exchangeRates,
});

const mapDispatchToProps = (dispatch) => ({
  getExchangeRates: () => dispatch(getExchangeRatesAction()),
  setExpenses: (expense) => dispatch(setExpensesAction(expense)),
});

WalletForm.propTypes = {
  currencies: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
  expenses: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
  exchangeRatesProps: PropTypes.shape().isRequired,
  handleUpdateTotal: PropTypes.func.isRequired,
  setExpenses: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
