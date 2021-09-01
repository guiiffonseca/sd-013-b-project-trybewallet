import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Convertion from './convertion';

class FormAdd extends Component {
  constructor() {
    super();

    this.state = {
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentacao',
      exchangeRates: {},
    };

    this.handleChange = this.handleChange.bind(this);
    this.Convertion = this.Convertion.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  Convertion() {
    Convertion();
    const { value, description, currency, method, tag, exchangeRates } = this.state;
    console.log(`${value} ${description} ${currency} ${method} ${tag} ${exchangeRates}`);
  }

  render() {
    const { currencies } = this.props;
    return (
      <form className="formAdd">
        <label htmlFor="value">
          Valor:
          <input type="number" id="value" name="value" onChange={ this.handleChange } />
        </label>

        <label htmlFor="describe">
          descrição:
          <textarea id="describe" name="description" onChange={ this.handleChange } />
        </label>

        <label htmlFor="currency">
          Moeda:
          <select id="currency" name="currency" onChange={ this.handleChange }>
            {
              Object.keys(currencies)
                .filter((currencyToFilter) => currencyToFilter !== 'USDT')
                .map((currency) => (<option key={ currency }>{ currency }</option>))
            }
          </select>
        </label>

        <label htmlFor="paymentMethod">
          Método de pagamento:
          <select id="paymentMethod" name="method" onChange={ this.handleChange }>
            <option value="dinheiro">Dinheiro</option>
            <option value="credito">Cartão de crédito</option>
            <option value="debito">Cartão de débito</option>
          </select>
        </label>

        <label htmlFor="category">
          Tag:
          <select id="category" name="tag" onChange={ this.handleChange }>
            <option value="alimentação">Alimentação</option>
            <option value="lazer">Lazer</option>
            <option value="trabalho">Trabalho</option>
            <option value="transporte">Transporte</option>
            <option value="saude">Saúde</option>
          </select>
        </label>

        <button type="button" onClick={ this.Convertion }>Adicionar despesa</button>
      </form>
    );
  }
}

FormAdd.propTypes = {
  currencies: PropTypes.string.isRequired,
};

const mapStateToProps = ({ wallet: { currencies } }) => ({
  currencies,
});

export default connect(mapStateToProps)(FormAdd);
