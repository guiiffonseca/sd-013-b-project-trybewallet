import React, { Component } from 'react';
import { connect } from 'react-redux';

class Formulario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moedas: [],
      loading: true,
    };
    this.fetchData = this.fetchData.bind(this);
    this.keyMap = this.keyMap.bind(this);
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

  keyMap(chave) {
    return (
      <option value={ chave } key={ chave }>{ chave }</option>
    );
  }

  render() {
    const { loading } = this.state;
    if (loading) return <h1>Loading</h1>;
    const { moedas } = this.state;
    return (
      <form>
        <label htmlFor="valor">
          Valor
          <input type="number" id="valor" />
        </label>
        <label htmlFor="descricao">
          <br />
          Descrição
          <input type="text" id="descricao" />
        </label>
        <label htmlFor="moeda">
          <br />
          Moeda
          <select id="moeda">
            {
              Object.keys(moedas)
                .map(this.keyMap)
            }
          </select>
        </label>
        <label htmlFor="metodo">
          <br />
          Método de pagamento
          <select id="metodo">
            <option value="money"> Dinheiro </option>
            <option value="credit"> Cartão de crédito </option>
            <option value="debit"> Cartão de Débito </option>
          </select>
        </label>
        <label htmlFor="tag">
          <br />
          Tag
          <select id="tag">
            <option value="alimentacao"> Alimentação </option>
            <option value="lazer"> Lazer </option>
            <option value="trabalho"> Trabalho </option>
            <option value="transporte"> Transporte </option>
            <option value="saude"> Saúde </option>
          </select>
        </label>
      </form>
    );
  }
}

const mapStateToProps = (dispatch) => ({
  moedas: dispatch.user.moedas,
});

export default connect(mapStateToProps)(Formulario);
