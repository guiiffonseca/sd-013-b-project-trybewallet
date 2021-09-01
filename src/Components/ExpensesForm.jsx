import React from 'react';
import propTypes, { object } from 'prop-types';
import { connect } from 'react-redux';
import { getCurrenciesThunk } from '../actions';

class ExpensesForm extends React.Component {

  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  render() {
    const { currencies } = this.props;
    return (
      <form>
        <label htmlFor="Valor">
          Valor
          <input type="text" name="Valor" id="Valor" />
        </label>
        <label htmlFor="Descrição">
          Descrição
          <input type="text" name="Descrição" id="Descrição" />
        </label>
        <label htmlFor="Moeda">
          Moeda
          <select name="Moeda" id="Moeda">
            { currencies.map((currency, index) => 
            (<option key={ index }>{currency.code}</option>))
            }
          </select>
        </label>
        <label htmlFor="Método de pagamento">
          Método de pagamento
          <select name="Método de pagamento" id="Método de pagamento">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="Tag">
          Tag
          <select name="Tag" id="Tag">
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

ExpensesForm.propTypes = {
  getCurrencies: propTypes.func,
  currencies: propTypes.arrayOf(propTypes.object),
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(getCurrenciesThunk()),
});

const mapStateToProps = ({ wallet: currencies }) => (currencies);

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesForm);
