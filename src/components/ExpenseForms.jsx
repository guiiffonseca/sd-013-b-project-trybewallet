import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchingCurrencies as fetchThunk } from '../actions/index';

const paymentMethods = [
  { value: 'money', text: 'Dinheiro' },
  { value: 'credit', text: 'Cartão de Crédito' },
  { value: 'debit', text: 'Cartão de Débito' },
];

const tags = [
  { value: 'food', text: 'Alimentação' },
  { value: 'work', text: 'Trabalho' },
  { value: 'transport', text: 'Transporte' },
  { value: 'heath', text: 'Saúde' },
  { value: 'lazer', text: 'Lazer' },

];

class ExpenseForms extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
      description: '',
      currency: 'USD',
      methodPay: 'Dinheiro',
      tag: 'Alimentação',
    };

    this.handleChange = this.handleChange.bind(this);
    this.value = this.value.bind(this);
    this.description = this.description.bind(this);
    this.currencies = this.currencies.bind(this);
    this.paymentMethods = this.paymentMethods.bind(this);
    this.renderTag = this.renderTag.bind(this);
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
    const { methodPay } = this.state;
    return (
      <label htmlFor="methodPay">
        Método de pagamento:
        <select
          id="methodPay"
          name="methodPay"
          value={ methodPay }
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
        </form>
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  moedas: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  fetchingCurrencies: () => dispatch(fetchThunk()),
});

ExpenseForms.propTypes = {
  moedas: PropTypes.arrayOf(PropTypes.string).isRequired,
  fetchingCurrencies: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseForms);
