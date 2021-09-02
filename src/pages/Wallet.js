import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import payments from '../data/payments';
import tags from '../data/tags';
import currencyAPI from '../services/currencyAPI';
import { getCurrency as getCurrencyAction} from '../actions';

class Wallet extends React.Component {
  constructor() {
    super();

    this.state = {
      valor: 0,
      descDespesa: '',
      moeda: '',
      pagamento: 'Dinheiro',
      tag: 'Alimentação',
    };

    this.handleChange = this.handleChange.bind(this);
    this.renderPaymentMethod = this.renderPaymentMethod.bind(this);
    this.renderTags = this.renderTags.bind(this);
    this.renderCurrency = this.renderCurrency.bind(this);
    this.renderDescription = this.renderDescription.bind(this);
    this.renderTotalValue = this.renderTotalValue.bind(this);
  }

  componentDidMount() {
    const { getCurrency } = this.props;

    currencyAPI()
      .then((response) => {
        const payload = [response];

        getCurrency(payload);
      });
      //nescessário salvar esse response no estado global
  }
  // event.target.name / value
  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  renderPaymentMethod(pagamento) {
    return (
      <label htmlFor="input-pagamento">
        Método de pagamento:
        <select
          id="input-pagamento"
          name="pagamento"
          value={ pagamento }
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

  renderCurrency(moeda) {
    const { wallet: { currencies } } = this.props;
    return (
      <label htmlFor="input-moeda">
        Moeda:
        <select
          id="input-moeda"
          name="moeda"
          value={ moeda }
          onChange={ this.handleChange }
        >
          { currencies.map((currency) => (
            <option value={ currency.code }>{ currency.code }</option>
          )) }
        </select>
      </label>
    );
  }

  renderDescription(descDespesa) {
    return (
      <label htmlFor="input-descricao">
        Descrição:
        <input
          id="input-descricao"
          type="text"
          name="descDespesa"
          value={ descDespesa }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  renderTotalValue(valor) {
    return (
      <label htmlFor="input-valor">
        Valor:
        <input
          id="input-valor"
          type="number"
          name="valor"
          value={ valor }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  render() {
    const { email } = this.props;
    const { valor, descDespesa, moeda, pagamento, tag } = this.state;
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
            { this.renderTotalValue(valor) }
            <br />
            { this.renderDescription(descDespesa) }
            <br />
            { this.renderCurrency(moeda) }
            <br />
            { this.renderPaymentMethod(pagamento) }
            <br />
            { this.renderTags(tag) }
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
});

const mapDispatchToProps = (dispatch) => ({
  getCurrency: (payload) => dispatch(getCurrencyAction(payload)),
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
