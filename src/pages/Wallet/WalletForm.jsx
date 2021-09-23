import React from 'react';
import PropTypes from 'prop-types';

class WalletForm extends React.Component {
  render() {
    const { currencies } = this.props;
    const MAX_LENGTH = 4;
    return (
      <form id="transaction-data">
        <label htmlFor="expenses">
          Valor:
          <input type="text" id="expenses" name="expenses" />
        </label>
        <br />
        <label htmlFor="description">
          Descrição:
          <input type="text" id="description" name="description" />
        </label>
        <br />
        <label htmlFor="currency">
          Moeda:
          <select id="currency" form="transaction-data" name="currency">
            {
              Object.keys(currencies)
                .filter((currency) => currency.length < MAX_LENGTH)
                .map((fiat) => (
                  <option key={ fiat }>{ fiat }</option>
                ))
            }
          </select>
        </label>
        <br />
        <label htmlFor="payment-method">
          Método de Pagamento:
          <select id="payment-method" form="transaction-data" name="payment-method">
            <option>Dinheiro</option>
            <option>Cartão de Crédito</option>
            <option>Cartão de Débito</option>
          </select>
        </label>
        <br />
        <label htmlFor="tag">
          Tag:
          <select id="tag" form="transaction-data" name="tag">
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

WalletForm.propTypes = {
  currencies: PropTypes.shape({
    USD: PropTypes.shape({
      ask: 'string',
      bid: 'string',
      code: 'string',
      codein: 'string',
      create_date: 'string',
      high: 'string',
      low: 'string',
      name: 'string',
      pctChange: 'string',
      timestamp: 'string',
    }),
    ARS: PropTypes.shape({
      ask: 'string',
      bid: 'string',
      code: 'string',
      codein: 'string',
      create_date: 'string',
      high: 'string',
      low: 'string',
      name: 'string',
      pctChange: 'string',
      timestamp: 'string',
    }),
    AUD: PropTypes.shape({
      ask: 'string',
      bid: 'string',
      code: 'string',
      codein: 'string',
      create_date: 'string',
      high: 'string',
      low: 'string',
      name: 'string',
      pctChange: 'string',
      timestamp: 'string',
    }),
    BTC: PropTypes.shape({
      ask: 'string',
      bid: 'string',
      code: 'string',
      codein: 'string',
      create_date: 'string',
      high: 'string',
      low: 'string',
      name: 'string',
      pctChange: 'string',
      timestamp: 'string',
    }),
    CAD: PropTypes.shape({
      ask: 'string',
      bid: 'string',
      code: 'string',
      codein: 'string',
      create_date: 'string',
      high: 'string',
      low: 'string',
      name: 'string',
      pctChange: 'string',
      timestamp: 'string',
    }),
    CHF: PropTypes.shape({
      ask: 'string',
      bid: 'string',
      code: 'string',
      codein: 'string',
      create_date: 'string',
      high: 'string',
      low: 'string',
      name: 'string',
      pctChange: 'string',
      timestamp: 'string',
    }),
    CNY: PropTypes.shape({
      ask: 'string',
      bid: 'string',
      code: 'string',
      codein: 'string',
      create_date: 'string',
      high: 'string',
      low: 'string',
      name: 'string',
      pctChange: 'string',
      timestamp: 'string',
    }),
    DOGE: PropTypes.shape({
      ask: 'string',
      bid: 'string',
      code: 'string',
      codein: 'string',
      create_date: 'string',
      high: 'string',
      low: 'string',
      name: 'string',
      pctChange: 'string',
      timestamp: 'string',
    }),
    ETH: PropTypes.shape({
      ask: 'string',
      bid: 'string',
      code: 'string',
      codein: 'string',
      create_date: 'string',
      high: 'string',
      low: 'string',
      name: 'string',
      pctChange: 'string',
      timestamp: 'string',
    }),
    EUR: PropTypes.shape({
      ask: 'string',
      bid: 'string',
      code: 'string',
      codein: 'string',
      create_date: 'string',
      high: 'string',
      low: 'string',
      name: 'string',
      pctChange: 'string',
      timestamp: 'string',
    }),
    GBP: PropTypes.shape({
      ask: 'string',
      bid: 'string',
      code: 'string',
      codein: 'string',
      create_date: 'string',
      high: 'string',
      low: 'string',
      name: 'string',
      pctChange: 'string',
      timestamp: 'string',
    }),
    ILS: PropTypes.shape({
      ask: 'string',
      bid: 'string',
      code: 'string',
      codein: 'string',
      create_date: 'string',
      high: 'string',
      low: 'string',
      name: 'string',
      pctChange: 'string',
      timestamp: 'string',
    }),
    JPY: PropTypes.shape({
      ask: 'string',
      bid: 'string',
      code: 'string',
      codein: 'string',
      create_date: 'string',
      high: 'string',
      low: 'string',
      name: 'string',
      pctChange: 'string',
      timestamp: 'string',
    }),
    LTC: PropTypes.shape({
      ask: 'string',
      bid: 'string',
      code: 'string',
      codein: 'string',
      create_date: 'string',
      high: 'string',
      low: 'string',
      name: 'string',
      pctChange: 'string',
      timestamp: 'string',
    }),
    USDT: PropTypes.shape({
      ask: 'string',
      bid: 'string',
      code: 'string',
      codein: 'string',
      create_date: 'string',
      high: 'string',
      low: 'string',
      name: 'string',
      pctChange: 'string',
      timestamp: 'string',
    }),
    XRP: PropTypes.shape({
      ask: 'string',
      bid: 'string',
      code: 'string',
      codein: 'string',
      create_date: 'string',
      high: 'string',
      low: 'string',
      name: 'string',
      pctChange: 'string',
      timestamp: 'string',
    }),
  }).isRequired,
};

export default WalletForm;
