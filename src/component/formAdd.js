import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCoinsExpenses as getCoinsExpensesAction } from '../actions/walletAction';
import { fetchApi as fetchApiAction } from '../actions/index';

class FormAdd extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentacao',
    };

    this.handleChange = this.handleChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const { value, description, currency, method, tag } = this.state;
    const { getCoinsExpenses, fetchApi, currencies, globalState, valueAll } = this.props;

    const exchangeRates = async () => {
      const fetch = await fetchApi();
      return fetch;
    };

    console.log(exchangeRates());

    const id = globalState.wallet.expenses.length
      ? globalState.wallet.expenses.length
      : 0;

    getCoinsExpenses({
      id,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates: currencies,
    });

    const a = globalState.wallet.currencies[currency].ask;
    const b = (a * value).toFixed(2);
    valueAll(b);
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
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
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>

        <label htmlFor="category">
          Tag:
          <select id="category" name="tag" onChange={ this.handleChange }>
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>

        <button type="button" onClick={ this.onClick }>Adicionar despesa</button>
      </form>
    );
  }
}

FormAdd.propTypes = {
  currencies: PropTypes.string.isRequired,
  fetchApi: PropTypes.func.isRequired,
  getCoinsExpenses: PropTypes.func.isRequired,
  globalState: PropTypes.shape({
    wallet: PropTypes.shape({
      currencies: PropTypes.func,
      expenses: PropTypes.shape({
        length: PropTypes.number,
      }),
    }),
  }).isRequired,
  valueAll: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  globalState: state,
});

const mapDispatchToProps = (dispatch) => ({
  getCoinsExpenses: (login) => dispatch(getCoinsExpensesAction(login)),
  fetchApi: () => dispatch(fetchApiAction()),
  valueAll: (login) => dispatch({ type: 'VALUE_ALL', payload: login }),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormAdd);
