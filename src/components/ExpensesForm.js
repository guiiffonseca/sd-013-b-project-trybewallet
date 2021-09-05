import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SelectOptions from './SelectOptions';

class ExpenseForms extends React.Component {
  render() {
    const { moedas } = this.props;
    const tagOptionst = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    const currencyOptions = Object.keys(moedas);
    const cleanArray = currencyOptions.filter((crr) => crr !== 'USDT');
    const expenseFormsOptions = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    return (
      <form>
        <label htmlFor="expense">
          Valor:
          <input type="number" name="expense" />
        </label>
        <label htmlFor="expenseDescription">
          Descrição
          <input type="text" name="expenseDescription" />
        </label>
        <label htmlFor="currency">
          Moeda
          <select name="currency">
            {cleanArray.map((crr) => <SelectOptions info={ crr } key={ crr } />) }
          </select>
        </label>
        <label htmlFor="paymentMethod">
          Método de pagamento
          <select name="expenseForms">
            {expenseFormsOptions.map((crr) => <SelectOptions info={ crr } key={ crr } />)}
          </select>
        </label>
        <label htmlFor="expenseTag">
          Tag
          <select name="expenseTag">
            {tagOptionst.map((crr) => <SelectOptions key={ crr } info={ crr } />)}
          </select>
        </label>
      </form>);
  }
}

const mapStateToProps = (state) => ({
  moedas: state.wallet.moedas,
});

ExpenseForms.propTypes = {
  moedas: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(ExpenseForms);
