import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchingCurrencies as fetchThunk, fetchingExpenses } from '../actions/index';

const paymentMethods = [
  { value: 'Dinheiro', text: 'Dinheiro' },
  { value: 'Cartão de crédito', text: 'Cartão de Crédito' },
  { value: 'Cartão de débito', text: 'Cartão de Débito' },
];

const tags = [
  { value: 'Alimentação', text: 'Alimentação' },
  { value: 'Trabalho', text: 'Trabalho' },
  { value: 'Transporte', text: 'Transporte' },
  { value: 'Saúde', text: 'Saúde' },
  { value: 'Lazer', text: 'Lazer' },

];

class ExpenseForms extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
      description: '',
      currency: 'USD',
      method: '',
      tag: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.value = this.value.bind(this);
    this.description = this.description.bind(this);
    this.currencies = this.currencies.bind(this);
    this.paymentMethods = this.paymentMethods.bind(this);
    this.renderTag = this.renderTag.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { fetchingCurrencies } = this.props;
    fetchingCurrencies();
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  handleClick() {
    const { expenses, gettingExpenses } = this.props;
    const id = expenses.length;
    console.log(this.state);
    gettingExpenses({ ...this.state, id });
  }

  value() {
    const { value } = this.state;
    return (
      <label htmlFor="value">
        Valor:
        <input
          type="number"
          id="value"
          name="value"
          value={ value }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  description() {
    const { description } = this.state;
    return (
      <label htmlFor="description">
        Descrição:
        <input
          type="text"
          id="description"
          name="description"
          value={ description }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  currencies() {
    const { currency } = this.state;
    const { moedas } = this.props;
    return (
      <label htmlFor="currency">
        Moeda:
        <select
          id="currency"
          name="currency"
          value={ currency }
          onChange={ this.handleChange }
        >
          { moedas.map((element) => (
            <option key={ element } value={ element }>{ element }</option>
          )) }
        </select>
      </label>
    );
  }

  paymentMethods() {
    const { method } = this.state;
    return (
      <label htmlFor="methodPay">
        Método de pagamento:
        <select
          id="methodPay"
          name="method"
          value={ method }
          onChange={ this.handleChange }
        >
          { paymentMethods.map(({ value, text }) => (
            <option key={ value } value={ value }>{ text }</option>
          ))}
        </select>
      </label>
    );
  }

  renderTag() {
    const { tag } = this.state;
    return (
      <label htmlFor="tag">
        Tag:
        <select
          id="tag"
          name="tag"
          value={ tag }
          onChange={ this.handleChange }
        >
          { tags.map(({ text, value }) => (
            <option key={ value } value={ value }>{ text }</option>
          ))}
        </select>
      </label>
    );
  }

  render() {
    return (
      <main>
        <form>
          { this.value() }
          { this.description() }
          { this.currencies() }
          { this.paymentMethods() }
          { this.renderTag() }
          <button
            type="button"
            onClick={ this.handleClick }
          >
            Adicionar Despesa
          </button>
        </form>
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  moedas: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  fetchingCurrencies: () => dispatch(fetchThunk()),
  gettingExpenses: (expenses) => dispatch(fetchingExpenses(expenses)),
});

ExpenseForms.propTypes = {
  moedas: PropTypes.arrayOf(PropTypes.string).isRequired,
  fetchingCurrencies: PropTypes.func.isRequired,
  gettingExpenses: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseForms);
