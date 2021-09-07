import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { actionLoadCurrenciesThunk } from '../actions';

class ExpenseForm extends React.Component {
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
          <input type="number" id="valor" name="valor" />
        </label>
        <label htmlFor="describe">
          Descrição
          <input type="text" id="describe" name="describe" />
        </label>
        <label htmlFor="moeda">
          Moeda
          <select id="moeda" name="moeda">
            { currencies.map((currencie) => (
              <option key={ currencie } value={ currencie }>{currencie}</option>
            )) }
          </select>
        </label>
        <label htmlFor="metodo-pagamento">
          Método de pagamento
          <select id="metodo-pagamento" name="metodo-pagamento">
            <option value="dinheiro">Dinheiro</option>
            <option value="credito">Cartão de crédito</option>
            <option value="debito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="categoria">
          Tag
          <select id="categoria" name="categoria">
            <option value="alimentacao">Alimentação</option>
            <option value="lazer">Lazer</option>
            <option value="trabalho">Trabalho</option>
            <option value="transporte">Transporte</option>
            <option value="saude">Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

ExpenseForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.object).isRequired,
  actionLoadCurrencies: PropTypes.func.isRequired,
};

const mapStateToProps = ({ wallet: { currencies } }) => ({
  currencies,
});

const mapDispatchToProps = (dispatch) => ({
  actionLoadCurrencies: () => dispatch(actionLoadCurrenciesThunk()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseForm);
