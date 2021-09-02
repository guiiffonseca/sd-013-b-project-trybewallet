import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  getExchangeRates as getExchangeRatesAction,
  setExpenses as setExpensesAction,
} from '../actions';
// import LabelWithInput from './LabelWithInput';

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
    // const eventId = event.target.id;
    // console.log(event.target.id);
    this.setState((prevState) => ({
      ...prevState,
      [id]: eventValue,
    }));
  }

  async handleClick(event) {
    const {
      getExchangeRates,
      exchangeRatesProp,
      handleUpdateTotal,
      setExpenses,
      expenses,
    } = this.props;
    const { value, description, currency, method, tag, exchangeRates } = this.state;
    console.log('exchangeRatesProp', exchangeRatesProp);
    event.preventDefault();
    // getExchangeRates();
    console.log('exchangeRates', JSON.stringify(exchangeRates));
    // console.log('this.props', this.props);
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const result = await response.json();
    console.log('result', result);
    // getExchangeRates();
    this.setState((prevState) => (
    // console.log('exchangeRates', exchangeRates);
      {
        ...prevState,
        id: expenses.length === 0 ? 0 : expenses[expenses.length - 1].id + 1,
        exchangeRates: result,
      }));
    handleUpdateTotal(value);
    // console.log(this.state);
    setExpenses(this.state);
    // console.log(expenses);
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
    // console.log(myObject);
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
    // PropTypes.shape({
    //   index: PropTypes.string.isRequired,
    // }).isRequired,
  ).isRequired,
  expenses: PropTypes.arrayOf(
    PropTypes.string.isRequired,
    // PropTypes.shape({
    //   index: PropTypes.string.isRequired,
    // }).isRequired,
  ).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
