import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { currenciesFromApi } from '../actions';

class ExpensesForm extends React.Component {
  componentDidMount() {
    const { currencyList } = this.props;
    currencyList();
  }

  render() {
    const { currencies } = this.props;
    return (
      <form>
        <label htmlFor="valor">
          Valor:
          <input type="text" id="valor" />
        </label>
        <label htmlFor="descricao">
          Descrição:
          <input type="text" id="descricao" />
        </label>
        <label htmlFor="moeda">
          Moeda:
          <select name="moeda" id="moeda">
            {
              currencies.map((currency) => (
                <option
                  value={ currency }
                  key={ currency }
                >
                  {currency}
                </option>
              ))
            }
          </select>
        </label>
        <label htmlFor="metodo">
          Método de pagamento:
          <select name="metodo" id="metodo">
            <option value="dinheiro">Dinheiro</option>
            <option value="credito">Cartão de crédito</option>
            <option value="debito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag:
          <select name="tag" id="tag">
            <option name="alimentação">Alimentação</option>
            <option name="lazer">Lazer</option>
            <option name="trabalho">Trabalho</option>
            <option name="transporte">Transporte</option>
            <option name="saude">Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

ExpensesForm.propTypes = {
  currencyList: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  currencyList: () => dispatch(currenciesFromApi()),
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesForm);
