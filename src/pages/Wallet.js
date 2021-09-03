import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import payments from '../data/payments';
import tags from '../data/tags';
import { getCurrencyThunk, expensesData as expensesDataAction } from '../actions';

class Wallet extends React.Component {
  constructor() {
    super();

    this.state = {
      id: 0,
      value: 0,
      description: '',
      method: 'Dinheiro',
      currency: 'USD',
      tag: 'Alimentação',
      exchangeRates: {},
    };

    this.handleChange = this.handleChange.bind(this);
    this.renderPaymentMethod = this.renderPaymentMethod.bind(this);
    this.renderTags = this.renderTags.bind(this);
    this.renderCurrency = this.renderCurrency.bind(this);
    this.renderDescription = this.renderDescription.bind(this);
    this.renderTotalValue = this.renderTotalValue.bind(this);
    this.addExpenses = this.addExpenses.bind(this);
  }

  componentDidMount() {
    const { getCurrency } = this.props;
    // obtenho a moeda(currency) da API
    getCurrency(); // está na mapdispatchToprops
  }

  // event.target.name / value
  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  renderPaymentMethod(method) {
    return (
      <label htmlFor="input-method">
        Forma de Pagamento:
        <select
          id="input-method"
          name="method"
          value={ method }
          onChange={ this.handleChange }
        >
          { payments.map(({ method, key }) => (
            <option value={ method } key={ key }>
              { method }
            </option>)) }
        </select>
      </label>
    );
  }

  renderTags(tag) {
    return (
      <label htmlFor="input-tag">
        Tag:
        <select
          id="input-tag"
          name="tag"
          value={ tag }
          onChange={ this.handleChange }
        >
          { tags.map(({ type, key }) => (
            <option value={ type } key={ key }>
              { type }
            </option>)) }
        </select>
      </label>
    );
  }

  renderCurrency(currency) {
    const { currencies } = this.props;
    // console.log(currencies);

    return (
      <label htmlFor="input-currency">
        Moeda:
        <select
          id="input-currency"
          name="currency"
          value={ currency }
          onChange={ this.handleChange }
        >
          { currencies.map((currency) => (
            <option value={ currency } key={ currency }>
              { currency }
            </option>
          )) }
        </select>
      </label>
    );
  }

  renderDescription(description) {
    return (
      <label htmlFor="input-descricao">
        Descrição:
        <input
          id="input-descricao"
          type="text"
          name="description"
          value={ description }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  renderTotalValue(value) {
    return (
      <label htmlFor="input-value">
        Valor:
        <input
          id="input-value"
          type="number"
          name="value"
          value={ value }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  addExpenses() {
    const { expensesData } = this.props;
    const { id, value, description, method, currency, tag, exchangeRates } = this.state;
    const payload =
      [{
        id,
        value,
        description,
        method,
        currency,
        tag,
        exchangeRates,
      }];
    
    expensesData(payload);
  }

  render() {
    const { email } = this.props;
    const { value, description, currency, method, tag } = this.state;
    return (
      <div>
        <header>
          <div data-testid="email-field">
            { email }
          </div>
          <div>
            Total despesa: R$
            <span data-testid="total-field">0</span>
          </div>
          <div>
            Câmbio atual:
            <span data-testid="header-currency-field">{' BRL'}</span>
          </div>
        </header>

        <main>
          <form>
            { this.renderTotalValue(value) }
            <br />
            { this.renderDescription(description) }
            <br />
            { this.renderCurrency(currency) }
            <br />
            { this.renderPaymentMethod(method) }
            <br />
            { this.renderTags(tag) }
            <br />
            <input
              type="button"
              value="Adicionar despesa"
              onClick={ this.addExpenses }
            />
          </form>
        </main>
      </div>
    );
  }
}

// lendo os dados do estado global: state
const mapStateToProps = (state) => ({
  // essa propriedade email tem que ter o mesmo nome da props
  email: state.user.email,
  currencies: state.wallet.currencies,
});

// escrevendo os dados no estado global
const mapDispatchToProps = (dispatch) => ({
  getCurrency: () => dispatch(getCurrencyThunk()),
  expensesData: (payload) => dispatch(expensesDataAction(payload)),
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  getCurrency: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
