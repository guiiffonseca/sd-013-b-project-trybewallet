import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalOutgoing: 0,
      currency: 'BRL',
    };
    this.renderHeader = this.renderHeader.bind(this);
    this.renderAddForm = this.renderAddForm.bind(this);
    this.renderCostInput = this.renderCostInput.bind(this);
    this.renderDescriptionInput = this.renderDescriptionInput.bind(this);
    this.renderCurrenciesSelect = this.renderCurrenciesSelect.bind(this);
    this.renderPaymentMethodSelect = this.renderPaymentMethodSelect.bind(this);
    this.renderTagSelect = this.renderTagSelect.bind(this);
  }

  renderHeader(email, totalOutgoing, currency) {
    return (
      <header>
        <h4 data-testid="email-field">{email}</h4>
        <h4 data-testid="total-field">
          Total Outgoing:
          {totalOutgoing}
        </h4>
        <h4 data-testid="header-currency-field">
          Currency:
          {currency}
        </h4>
      </header>
    );
  }

  renderCostInput() {
    return (
      <label htmlFor="valorId">
        Valor
        <input type="text" id="valorId" />
      </label>
    );
  }

  renderDescriptionInput() {
    return (
      <label htmlFor="descriçãoId">
        Descrição
        <input type="text" id="descriçãoId" />
      </label>
    );
  }

  renderCurrenciesSelect() {
    return (
      <label htmlFor="moedaId">
        Moeda
        <select name="moedas" id="moedaId">
          <option> </option>
        </select>
      </label>
    );
  }

  renderPaymentMethodSelect() {
    return (
      <label htmlFor="pagamentoId">
        Método de pagamento
        <select name="pagamento" id="pagamentoId">
          <option value="dinheiro">Dinheiro</option>
          <option value="crédito">Cartão de crédito</option>
          <option value="débito">Cartão de débito</option>
        </select>
      </label>
    );
  }

  renderTagSelect() {
    return (
      <label htmlFor="tagId">
        Tag
        <select name="tag" id="tagId">
          <option value="alimentação">Alimentação</option>
          <option value="lazer">Lazer</option>
          <option value="trabalho">Trabalho</option>
          <option value="transporte">Transporte</option>
          <option value="saúde">Saúde</option>
        </select>
      </label>
    );
  }

  renderAddForm() {
    return (
      <form>
        {this.renderCostInput()}
        {this.renderDescriptionInput()}
        {this.renderCurrenciesSelect()}
        {this.renderPaymentMethodSelect()}
        {this.renderTagSelect()}
      </form>
    );
  }

  render() {
    const { userEmail } = this.props;
    const { totalOutgoing, currency } = this.state;
    return (
      <div>
        {this.renderHeader(userEmail,
          totalOutgoing,
          currency)}
        {this.renderAddForm()}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
});

Wallet.propTypes = {
  userEmail: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(Wallet);
