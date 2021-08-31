import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Wallet extends React.Component {
  constructor() {
    super();

    this.state = {
      currency: [],
    };
  }

  async componentDidMount() {
    this.updateCurrency();
  }

  updateCurrency() {
    fetch('https://economia.awesomeapi.com.br/json/all')
      .then((data) => data.json())
      .then((result) => Object.keys(result))
      .then((all) => all.filter((one) => one !== 'USDT'))
      .then((final) => this.setState({ currency: final }));
  }

  render() {
    const { email } = this.props;
    const { currency } = this.state;
    return (
      <div>
        <header>
          <p>TrybeWallet</p>
          <div data-testid="email-field">{ email }</div>
          <div data-testid="total-field">0</div>
          <div data-testid="header-currency-field">BRL</div>
        </header>
        <form>
          <label htmlFor="valor">
            Valor
            <input name="valor" type="number" id="valor" />
          </label>
          <label htmlFor="summary">
            Descrição
            <input name="summary" type="text" id="summary" />
          </label>
          <label htmlFor="currency">
            Moeda
            <select name="currency" id="currency">
              { currency.map((eachOne) => <option key={ eachOne }>{ eachOne }</option>) }
            </select>
          </label>
          <label htmlFor="payment">
            Método de pagamento
            <select name="payment" id="payment">
              <option>Dinheiro</option>
              <option>Cartão de Crédito</option>
              <option>Cartão de Débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag
            <select name="tag" id="tag">
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};
