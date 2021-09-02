import React from 'react';
import { connect } from 'react-redux';
import { currenciesFromApi } from '../actions';

class ExpensesForm extends React.Component {
  componentDidMount() {
    const { currencyList } = this.props;
    currencyList();
    console.log(currencyList());
  }

  render() {
    const { currencyList } = this.props;
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
            {/* { currencyList.map((currency) => (
              <option value={ currency } key={ currency }>{currency}</option>
            ))} */}
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

const mapDispatchToProps = (dispatch) => ({
  currencyList: () => dispatch(currenciesFromApi()),
});

export default connect(null, mapDispatchToProps)(ExpensesForm);
