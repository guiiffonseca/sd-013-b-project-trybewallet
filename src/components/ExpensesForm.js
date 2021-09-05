import React from 'react';
import SelectOptions from './SelectOptions';

class ExpenseForms extends React.Component {
  render() {
    const tagOptionst = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    const expenseFormsOptions = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const currencyOptions = ['test', 'test2'];
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
            {currencyOptions.map((crr) => <SelectOptions info={ crr } key={ crr } />) }
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

export default ExpenseForms;
