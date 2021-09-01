import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { thunkCurrencies } from '../actions/index';

class Form extends Component {
  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  render() {
    const { currencies } = this.props;
    console.log(Object.keys(currencies));
    return (
      <div>
        <form>
          <label htmlFor="valor">
            Valor:
            <input type="text" name="valor" id="valor" />
          </label>

          <label htmlFor="descrição">
            Descrição:
            <textarea name="descriçao" id="descrição" />
          </label>

          <label htmlFor="moeda">
            Moeda
            <select name="moeda" id="moeda">
              {
                Object.keys(currencies)
                  .filter((currency) => currency !== 'USDT')
                  .map((currency) => (<option key={ currency }>{ currency }</option>))
              }
            </select>
          </label>

          <label htmlFor="forma-pagamento">
            Método de pagamento:
            <select name="forma-pagamento" id="forma-pagamento">
              <option>Dinheiro</option>
              <option>Cartão de Crédito</option>
              <option>Cartão de Débito</option>
            </select>
          </label>

          <label htmlFor="tag">
            Tag:
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
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(thunkCurrencies()),
});

Form.propTypes = {
  getCurrencies: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(Array).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
