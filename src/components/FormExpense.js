import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { actionLoadCurrenciesThunk } from '../actions';

class FormExpense extends Component {
  componentDidMount() {
    const { actionLoadCurrencies } = this.props;
    actionLoadCurrencies();
  }

  render() {
    const { currencies } = this.props;
    return (
      <form>
        <label htmlFor="valor">
          Valor
          <input type="number" name="valor" id="valor" />
        </label>
        <label htmlFor="describe">
          Descrição
          <input type="text" name="describe" id="describe" />
        </label>
        <label htmlFor="moeda">
          Moeda
          <select name="moeda" id="moeda">
            { currencies.map((currencie) => (
              <option key={ currencie } value={ currencie }>{currencie}</option>
            )) }
          </select>
        </label>
        <label htmlFor="metodo-pagamento">
          Método de pagamento
          <select name="metodo-pagamento" id="metodo-pagamento">
            <option value="dinheiro">Dinheiro</option>
            <option value="credito">Cartão de crédito</option>
            <option value="debito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="categoria">
          Tag
          <select name="categoria" id="categoria">
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

FormExpense.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.object).isRequired,
  actionLoadCurrencies: PropTypes.func.isRequired,
};

const mapStateToProps = ({ wallet: { currencies } }) => ({
  currencies,
});

const mapDispatchToProps = (dispatch) => ({
  actionLoadCurrencies: () => dispatch(actionLoadCurrenciesThunk()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormExpense);
