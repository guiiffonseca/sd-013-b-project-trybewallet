import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { payments } from '../data/payments';
import { tags } from '../data/tags';

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

    this.renderPaymentMethod = this.renderPaymentMethod.bind(this);
    this.renderTags = this.renderTags.bind(this);
    this.renderCurrency = this.renderCurrency.bind(this);
    this.renderDescription = this.renderDescription.bind(this);
    this.renderTotalValue = this.renderTotalValue.bind(this);
  }

  renderPaymentMethod(pagamento) {
    return (
      <label htmlFor="input-pagamento">
        Método de pagamento:
        <select
          id="input-pagamento"
          value={ pagamento }
        >
          { payments.map(({ method }) => (
            <option value={ method }>
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
        <select id="input-tag" value={ tag }>
          { tags.map(({ type }) => (
            <option value={ type }>
              { type }
            </option>)) }
        </select>
      </label>
    );
  }

  renderCurrency(moeda) {
    return (
      <label htmlFor="input-moeda">
        Moeda:
        <select
          id="input-moeda"
          value={ moeda }
        >
          <option>Escolha uma moeda</option>
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

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};
export default connect(mapStateToProps)(Wallet);
