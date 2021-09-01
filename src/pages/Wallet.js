import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchApi } from '../actions';

import Input from '../components/Input';
import Selects from '../components/Selects';

class Wallet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      moedas: [],
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };

    this.handleMoedas = this.handleMoedas.bind(this);
    this.createOptions = this.createOptions.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.calcExchanges = this.calcExchanges.bind(this);
  }

  componentDidMount() {
    this.handleMoedas();
  }

  async handleMoedas() {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const moedasTotais = await response.json();
    const moedas = Object.keys(moedasTotais).filter((moeda) => moeda !== 'USDT');
    this.setState({
      moedas,
    });
  }

  createOptions() {
    const { moedas } = this.state;
    return (
      moedas.map((moeda, index) => (
        <option
          key={ index }
          value={ moeda }
        >
          {moeda}
        </option>
      ))
    );
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  async submitForm() {
    const { saveValues } = this.props;
    const { id, value, description, currency, tag, method } = this.state;
    const filteredState = { id, value, description, currency, tag, method };
    saveValues(filteredState);
    this.setState((state) => ({
      id: state.id + 1,
    }));
  }

  calcExchanges() {
    const { exchanges } = this.props;
    let sum = '0.00';
    if (exchanges.length > 0) {
      const numbers = exchanges.map(({ value, currency, exchangeRates }) => (
        exchangeRates[currency].ask * parseFloat(value)
      ));
      sum = numbers.reduce((acc, curr) => acc + curr);
      return sum.toFixed(2);
    }
    return sum;
  }

  render() {
    const { userEmail } = this.props;
    const { value, description, currency, tag, method } = this.state;
    return (
      <>
        <header>
          <p data-testid="email-field">{`Email: ${userEmail}`}</p>
          <p data-testid="total-field">{`R$ ${this.calcExchanges()}`}</p>
          <p data-testid="header-currency-field">BRL</p>
        </header>
        <form>
          <Input
            label="Valor"
            value={ value }
            type="number"
            name="value"
            id="value"
            onChange={ this.handleChange }
          />
          <Input
            label="Descrição"
            value={ description }
            id="description"
            name="description"
            type="text"
            onChange={ this.handleChange }
          />
          <Selects
            createOptions={ this.createOptions }
            handleChange={ this.handleChange }
            currency={ currency }
            method={ method }
            tag={ tag }
          />
          <button
            type="button"
            onClick={ this.submitForm }
          >
            Adicionar despesa
          </button>
        </form>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  exchanges: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  saveValues: (state) => dispatch(fetchApi(state)),
});

Wallet.propTypes = {
  userEmail: PropTypes.string.isRequired,
  saveValues: PropTypes.func.isRequired,
  exchanges: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
