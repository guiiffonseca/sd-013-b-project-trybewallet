import { createProxyMiddleware } from 'http-proxy-middleware';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { currencies } = this.props;

    return (
      <form>
        <label htmlFor="value">
          Valor
          <input type="number" name="value" id="value" />
        </label>
        <label htmlFor="description">
          Descrição
          <input type="text" name="description" id="description" />
        </label>
        <label htmlFor="pay_currency">
          Moeda
          <select name="pay_currency" id="pay_currency">
            {currencies
              .filter((currency) => currency.codein !== 'BRLT')
              .map((currency) => <option>{currency.code}</option>)}
          </select>
        </label>
        <label htmlFor="pay_met">
          Método de pagamento
          <select name="pay_met" id="pay_met">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="pay_met">
          Tag
          <select name="pay_met" id="pay_met">
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>

      </form>
    );
  }
}

const mapStateToProps = ({ wallet: { currencies } }) => ({
  currencies,
});

export default connect(mapStateToProps, null)(Form);
