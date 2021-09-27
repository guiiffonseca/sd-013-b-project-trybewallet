import React, { Component } from 'react';

class Forms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moedas: [],
    };
  }

  componentDidMount() {
    this.fetchURL();
  }

  async fetchURL() {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const result = await response.json();
    this.setState({
      moedas: Object.keys(result) });
    this.removeUSDT();
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
          <label htmlFor="valor">
            <input type="number" aria-label="valor" />
            Valor
          </label>
          <label htmlFor="Descrição">
            <input type="text" aria-label="Descrição" />
            Descrição
          </label>
          <label htmlFor="select">
            Moeda
            <select aria-label="moeda">
              {moedas
                .map((money) => (
                  <option id={ money } key={ `${money}` }>
                    {money}
                  </option>))}
            </select>
          </label>
          <label htmlFor="paymentMethod">
            Método de pagamento
            <select id="paymentMethod" aria-label="Método de pagamento">
              <option value="money"> Dinheiro </option>
              <option value="creditCard"> Cartão de Crédito </option>
              <option value="debitCard"> Cartão de Débito </option>
            </select>
          </label>
          <label htmlFor="select">
            tag
            <select aria-label="Tag">
              <option value="food"> Alimentação </option>
              <option value="leisure"> Lazer </option>
              <option value="work"> Trabalho </option>
              <option value="transport"> Transporte </option>
              <option value="health"> Saúde </option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

export default Forms;
