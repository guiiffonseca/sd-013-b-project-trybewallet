import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCurrencyThunk } from '../actions';
import Header from '../components/Header';
// import './Wallet.css';

class Wallet extends React.Component {
  componentDidMount() {
    const { fetchCurrency } = this.props;
    fetchCurrency();
  }

  render() {
    const { user, wallet } = this.props;
    const { email } = user;
    const { currencies } = wallet;
    // const { currencies } = this.state;
    return (
      <div>
        <Header email={ email } />
        <form id="form-currency">
          <label htmlFor="value">
            Valor:
            <input id="value" type="text" name="value" />
          </label>
          <label htmlFor="description">
            Descrição:
            <input id="description" type="text" name="description" />
          </label>
          <label htmlFor="currency">
            Moeda:
            <select id="currency">
              {
                Object.keys(currencies)
                  .filter((currencyToFilter) => currencyToFilter !== 'USDT')
                  .map((currency) => (<option key={ currency }>{ currency }</option>))
              }
            </select>
          </label>
          <label htmlFor>
            Método de pagamento:
            <select>
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag:
            <select id="tag">
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>
          </label>
          <button type="button">Adicionar despesa</button>
        </form>
      </div>
    );
  }
}

// Códigos abaixo foram retirados do repositorio
// live lecture referente ao dia 16.3

Wallet.propTypes = {
  user: PropTypes.objectOf(PropTypes.string).isRequired,
  fetchCurrency: PropTypes.func.isRequired,
  wallet: PropTypes.arrayOf(PropTypes.shape({
    currencies: PropTypes.arrayOf(PropTypes.string),
    // expenses: PropTypes.array,
  })).isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
  wallet: state.wallet,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurrency: () => dispatch(fetchCurrencyThunk()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
