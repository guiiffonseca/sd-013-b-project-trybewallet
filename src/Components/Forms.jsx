import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {createStore} from 'redux';
import { saveWalletInfo } from '../actions';
import FormsElements from './FormsElements';

class Forms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moedas: [],
      id: 0,
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Cartão de crédito',
      tag: 'Alimentação',
      exchangeRates: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    this.fetchURL();
  }

  onClick() {
    const { walletsafe } = this.props;
    const {
      moedas,
      id,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates,
    } = this.state;
    this.fetchClick();
    walletsafe(moedas, { id,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates });
    this.setState((prevState) => ({
      id: prevState.id + 1,
    }));
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  async fetchURL() {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const result = await response.json();
    this.setState({
      moedas: Object.keys(result),
      exchangeRates: result,
    });
    this.removeUSDT();
  }

  async fetchClick() {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const result = await response.json();
    this.setState({
      exchangeRates: result,
    });
  }

  removeUSDT() {
    const MENOS_UM = -1;
    const { moedas } = this.state;
    const index = moedas.indexOf('USDT');
    if (index > MENOS_UM) {
      moedas.splice(index, 1);
    }
    this.setState({
      moedas,
    });
  }

  render() {
    const { moedas } = this.state;
    return (
      <div>
        <form>
          <FormsElements onChange={ this.handleChange } moedas={ moedas } />
          <label htmlFor="Tag">
            Tag
            <select id="Tag" name="tag" onChange={ this.handleChange }>
              <option value="Alimentação"> Alimentação </option>
              <option value="Lazer"> Lazer </option>
              <option value="Trabalho"> Trabalho </option>
              <option value="Transporte"> Transporte </option>
              <option value="Saúde"> Saúde </option>
            </select>
          </label>
          <label htmlFor="method">
            Método de pagamento
            <select
              id="method"
              name="method"
              onChange={ this.handleChange }
            >
              <option> Dinheiro </option>
              <option> Cartão de Crédito </option>
              <option> Cartão de Débito </option>
            </select>
          </label>
          <button
            id="button"
            type="button"
            onClick={ this.onClick }
          >
            Adicionar despesa
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  walletsafe: (currencies, expenses) => dispatch(saveWalletInfo(currencies, expenses)),
});

Forms.propTypes = {
  walletsafe: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Forms);
