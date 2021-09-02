import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { addExpense } from '../../actions';

class Formulario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moedas: [],
      loading: true,
      value: '',
      description: '',
      currency: 'USD',
      method: 'MONEY',
      tag: 'Alimentacao',
    };
    this.fetchData = this.fetchData.bind(this);
    this.keyMap = this.keyMap.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.enviarDespesa = this.enviarDespesa.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await response.json();
    delete data.USDT;
    delete data.DOGE;
    this.setState({
      moedas: data,
      loading: false,
    });
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value,
    });
  }

  keyMap(chave) {
    return (
      <option value={ chave } key={ chave }>{ chave }</option>
    );
  }

  async enviarDespesa() {
    const { addDespesa, despesas } = this.props;
    const { value, description, currency, method, tag } = this.state;
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await response.json();
    delete data.USDT;
    delete data.DOGE;

    const obj = {
      id: despesas.length > 0 ? despesas[despesas.length - 1].id + 1 : 0,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates: data,
    };

    addDespesa(obj);

    this.setState({
      value: '',
      description: '',
      currency: 'USD',
      method: 'MONEY',
      tag: 'alimentacao',
    });
  }

  inputRender() {
    const { value, description } = this.state;
    return (
      <>
        <label htmlFor="value">
          Valor
          <input
            type="number"
            id="value"
            onChange={ this.handleChange }
            value={ value }
          />
        </label>
        <label htmlFor="description">
          <br />
          Descrição
          <input
            type="text"
            id="description"
            onChange={ this.handleChange }
            value={ description }
          />
        </label>
      </>

    );
  }

  render() {
    const { loading } = this.state;
    if (loading) return <h1>Loading</h1>;
    const { moedas } = this.state;
    return (
      <form>
        { this.inputRender() }
        <label htmlFor="currency">
          <br />
          Moeda
          <select id="currency" onChange={ this.handleChange }>
            { Object.keys(moedas).map(this.keyMap) }
          </select>
        </label>
        <label htmlFor="method">
          <br />
          Método de pagamento
          <select id="method" onChange={ this.handleChange }>
            <option value="Dinheiro"> Dinheiro </option>
            <option value="Cartão de crédito"> Cartão de crédito </option>
            <option value="Cartão de débito"> Cartão de Débito </option>
          </select>
        </label>
        <label htmlFor="tag">
          <br />
          Tag
          <select id="tag" onChange={ this.handleChange }>
            <option value="Alimentacao"> Alimentação </option>
            <option value="Lazer"> Lazer </option>
            <option value="Trabalho"> Trabalho </option>
            <option value="Transporte"> Transporte </option>
            <option value="Saúde"> Saúde </option>
          </select>
        </label>
        <button type="button" onClick={ this.enviarDespesa }>Adicionar despesa</button>
      </form>
    );
  }
}

const mapStateToProps = (dispatch) => ({
  despesas: dispatch.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  addDespesa: (despesa) => dispatch(addExpense(despesa)),
});

Formulario.propTypes = {
  addDespesa: propTypes.objectOf(propTypes.func).isRequired,
  despesas: propTypes.objectOf(propTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Formulario);
