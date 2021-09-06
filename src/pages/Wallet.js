import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import currencies from '../api/currencyApi';

class Wallet extends React.Component {
  constructor() {
    super();

    this.fetchCurrencies = this.fetchCurrencies.bind(this);
    this.renderCurrenciesOptions = this.renderCurrenciesOptions.bind(this);

    this.state = {
      cur: {},
    };
  }

  componentDidMount() {
    this.fetchCurrencies();
  }

  async fetchCurrencies() {
    const data = await currencies();
    this.setState({ cur: data });
  }

  renderCurrenciesOptions() {
    const { cur } = this.state;
    let options;
    if (Object.keys(cur).length === 0) options = [''];
    else options = Object.keys(cur);

    return options.map((x) => <option name={ x } value={ x } key={ x }>{x}</option>);
  }

  renderPaymentOptions() {
    return (
      <select id="paymentmethod">
        <option id="dinheiro" name="dinheiro" value="dinheiro">Dinheiro</option>
        <option id="credito" name="credito" value="credito">Cartão de Crédito</option>
        <option id="debito" name="debito" value="debito">Cartão de Débito</option>
      </select>
    );
  }

  renderTagOptions() {
    return (
      <select id="tag">
        <option
          id="alimentacao"
          name="alimentacao"
          value="alimentacao"
        >
          Alimentação

        </option>
        <option id="lazer" name="lazer" value="lazer">Lazer</option>
        <option id="trabalho" name="trabalho" value="trabalho">Trabalho</option>
        <option id="transporte" name="transporte" value="transporte">Transporte</option>
        <option id="saude" name="saude" value="saude">Saúde</option>
      </select>
    );
  }

  render() {
    const { email } = this.props;
    return (
      <div>
        <header>
          <div data-testid="email-field">{email}</div>
          <div data-testid="total-field">0</div>
          <div data-testid="header-currency-field">BRL</div>
        </header>
        <div>
          <form>
            <label htmlFor="valor">
              Valor
              <input type="number" id="valor" />

            </label>
            <label htmlFor="descricao">
              Descrição
              <input type="text" id="descricao" />
            </label>

            <label htmlFor="currency">
              Moeda
              <select id="currency">
                {this.renderCurrenciesOptions()}
              </select>
            </label>

            <label htmlFor="paymentmethod">
              Método de pagamento
              {this.renderPaymentOptions()}
            </label>

            <label htmlFor="tag">
              Tag
              {this.renderTagOptions()}
            </label>

          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Wallet);
