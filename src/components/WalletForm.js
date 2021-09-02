import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import LabelWithInput from './LabelWithInput';

class WalletForm extends React.Component {
  constructor() {
    super();
    this.state = {
      // id: 0,
      value: '',
      description: '',
      currency: '',
      method: '',
      tag: '',
      // exchangeRates: '',
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
      ...prevState, [id]: eventValue,
    }));
  }

  handleClick(event) {
    event.preventDefault();
  }

  renderInput({ label, id, type, value, stateKey }) {
    return (
      <label htmlFor={ id }>
        {label}
        <input id={ id } type={ type } value={ value } onChange={ (event) => this.handleChange(event, stateKey) } />
      </label>
    );
  }

  renderSelectCurrency({ currency, currencies }) {
    return (
      <label htmlFor="currency">
        Moeda
        <select id="currency" value={ currency } onChange={ (event) => this.handleChange(event, 'currency') }>
          {currencies.map((currencyValue) => (
            <option key={ currencyValue } value={ currencyValue }>
              {currencyValue}
            </option>
          ))}
        </select>
      </label>
    );
  }

  renderForm() {
    const { currencies } = this.props;
    const { value, description, currency, method, tag } = this.state;
    console.log(tag);
    return (
      <form>
        {this.renderInput({ label: 'Valor', id: 'value', type: 'number', value, stateKey: 'value' })}
        {this.renderInput({ label: 'Descrição', id: 'description', type: 'text', value: description, stateKey: 'description' })}
        {this.renderSelectCurrency({ currency, currencies })}

        <label htmlFor="payment-method">
          Método de pagamento
          <select
            id="payment-method"
            value={ method }
            onChange={ (event) => this.handleChange(event, 'method') }
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="category">
          Tag
          <select id="category" value={ tag } onChange={ (event) => this.handleChange(event, 'tag') }>
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        <button type="submit" onClick={ this.handleClick }>Adicionar despesa</button>
      </form>
    );
  }

  render() {
    const { expenses } = this.props;
    const { value, description, currency, method, tag } = this.state;
    console.log(expenses);
    const myObject = {
      id: expenses.length === 0
        ? 0
        : expenses[expenses.length - 1].id + 1,
      value,
      description,
      currency,
      method,
      tag,
      // exchangeRates
    };
    console.log(myObject);
    return this.renderForm();
  }
}

const mapStateToProps = ({
  wallet: { currencies, expenses } }) => ({
  currencies, expenses,
});

// const mapDispatchToProps = (dispatch) => ({
// setEmail: (email) => dispatch(setEmailAction(email)),
// });

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

export default connect(mapStateToProps, null)(WalletForm);
