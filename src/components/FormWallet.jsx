import React, { Component } from 'react';
import Moedas from '../api';

export default class FormWallet extends Component {
  constructor(props) {
    super(props);

    this.state = {
      moedas: [],
    };
  }

  componentDidMount() {
    this.PegaMoedas();
  }

  async PegaMoedas() {
    const valor = await Moedas();
    const moedas = Object.keys(valor);

    this.setState(({
      moedas,
    }));
  }

  render() {
    const { moedas } = this.state;
    console.log(Array.isArray(moedas));
    return (
      <form>
        <label htmlFor="valor">
          Valor
          <input type="text" id="valor" name="name" />
        </label>
        <label htmlFor="desc">
          Descrição
          <input type="text" id="desc" name="name" />
        </label>
        <label htmlFor="moeda">
          Moeda
          <select id="moeda">
            {moedas.map((name) => {
              if (name !== 'USDT') {
                return <option key={ name } value={ name }>{name}</option>;
              }
              return '';
            })}
          </select>
        </label>
        <label htmlFor="Mpagamento">
          Método de pagamento
          <select name="metodoPagamento" id="Mpagamento">
            <option value="dinheiro">Dinheiro</option>
            <option value="CartaoDeCredito">Cartão de crédito</option>
            <option value="CartaoDeDebito">Cartão de débito</option>
          </select>
        </label>

        <label htmlFor="CategoriaDespesa">
          Tag
          <select name="CategoriaDes" id="CategoriaDespesa">
            <option value="alimentacao">Alimentação</option>
            <option value="lazer">Lazer</option>
            <option value="trabalho">Trabalho</option>
            <option value="transporte">Transporte</option>
            <option value="saude">Saúde</option>
          </select>
        </label>

      </form>
    );
  }
}
