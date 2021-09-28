import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setExpenses } from '../../actions';

class WalletForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expenseCount: 0,
      exchangeRates: {},
    };
  }

  fetchExchangeRates() {
    const { expenseCount } = this.state;
    fetch('https://economia.awesomeapi.com.br/json/all')
      .then((data) => data.json())
      .then((jsonData) => this.setState({
        exchangeRates: jsonData,
        expenseCount: expenseCount + 1,
      }))
      .then(() => delete this.state.exchangeRates.USDT)
      .then(() => delete this.state.exchangeRates.DOGE);
  }

  componentDidMount() {
    const { saveExpenses } = this.props;
    this.fetchExchangeRates();
    saveExpenses([]);
  }

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

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  saveExpenses: (payload) => dispatch(setExpenses(payload)),
});

WalletForm.propTypes = {
  currencies: PropTypes.objectOf(PropTypes.object).isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
