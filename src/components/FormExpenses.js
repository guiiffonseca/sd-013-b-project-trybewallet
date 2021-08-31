import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCoin as fetchCoinAction } from '../actions';

class FormExpenses extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }

  componentDidMount() {
    const { fetchCoin } = this.props;
    fetchCoin();
  }

  payment() {
    return (
      <label htmlFor="payment-input">
        Método de pagamento
        <select name="payment" id="payment-input">
          <option value="dinheiro">Dinheiro</option>
          <option value="cartaoCredito">Cartão de crédito</option>
          <option value="cartaoDebito">Cartão de débito</option>
        </select>
      </label>
    );
  }

  tag() {
    return (
      <label htmlFor="tag-input">
        Tag
        <select name="tag" id="tag-input">
          <option value="alimentacao">Alimentação</option>
          <option value="lazer">Lazer</option>
          <option value="trabalho">Trabalho</option>
          <option value="transporte">Transporte</option>
          <option value="saude">Saúde</option>
        </select>
      </label>
    );
  }

  render() {
    const { currencies } = this.props;
    return (
      <form>
        <label htmlFor="valor-input">
          Valor:
          <input type="number" name="amount" id="valor-input" />
        </label>
        <label htmlFor="description-input">
          Descrição:
          <input type="text" name="description" id="description-input" />
        </label>
        <label htmlFor="currency-input">
          Moeda:
          <select name="currency" id="currency-input">
            {currencies.map((currency) => ( 
              <option key={ currency } value={ currency }>{currency}</option>
            ))}
          </select>
        </label>
        {this.payment()}
        {this.tag()}
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCoin: () => dispatch(fetchCoinAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormExpenses);

FormExpenses.propTypes = {
  fetchCoin: PropTypes.func,
  currencies: PropTypes.objectOf(PropTypes.object),
}.isRequired;
