import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { fetchCurrencyThunk } from '../actions';

class Wallet extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     currency: [],
  //   };
  // }

  componentDidMount() {
    const { fetchCurrency } = this.props;
    fetchCurrency();
  }

  currencyOptionsCreator() {
    const { currencies } = this.props;
    if (currencies.length < 1) {
      return;
    }
    const newArray = currencies.filter((element) => element[1] !== undefined);
    return newArray.map((currency) => {
      const currencyName = currency[0];
      return (
        <option
          key={ currencyName }
          value={ currencyName }
        >
          { currencyName }
        </option>
      );
    });
  }

  forms() {
    return (
      <form>
        <label htmlFor="valor">
          Valor
          <input
            type="number"
            name="valor"
            id="valor"
          />
        </label>
        <label htmlFor="descrição">
          Descrição
          <input
            type="text"
            name="descrição"
            id="descrição"
          />
        </label>
        <label htmlFor="moeda">
          Moeda
          <select id="moeda">
            { this.currencyOptionsCreator() }
          </select>
        </label>
        <label htmlFor="pagamento">
          Método de pagamento
          <select id="pagamento">
            <option name="Dinheiro" value="dinheiro">Dinheiro</option>
            <option name="Cartão de Crédito" value="crédito">Cartão de Crédito</option>
            <option name="Cartão de Débito" value="débito">Cartão de Débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select id="tag">
            <option name="Alimentação" value="ali">Alimentação</option>
            <option name="Lazer" value="laz">Lazer</option>
            <option name="Trabalho" value="trab">Trabalho</option>
            <option name="Transporte" value="trans">Transporte</option>
            <option name="Saúde" value="saud">Saúde</option>
          </select>
        </label>
      </form>
    );
  }

  render() {
    const { email } = this.props;
    return (
      <div>
        <header>
          <div data-testid="email-field">
            { email }
          </div>
          <div data-testid="total-field">
            0
          </div>
          <div data-testid="header-currency-field">
            BRL
          </div>
        </header>
        {this.forms()}
      </div>
    );
  }
}

Wallet.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.array).isRequired,
  email: PropTypes.string.isRequired,
  fetchCurrency: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurrency: () => dispatch(fetchCurrencyThunk()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
