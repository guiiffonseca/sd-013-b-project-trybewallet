import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ItemList extends Component {
  expensesCalc() {
    const { state: { wallet: { expenses } } } = this.props;
    const expensesList = expenses
      .map((expense) => {
        const currentCurrencyExpensePrice = (expense.exchangeRates[expense.currency].ask);
        const currentCurrencyQuotation = expense.value;
        const expensePrice = (currentCurrencyExpensePrice * currentCurrencyQuotation)
          .toFixed(2);
        return expensePrice;
      });
    const totalExpenseInBRL = expensesList.reduce((curr, acc) => {
      acc = Number(acc);
      curr += acc;
      return Number(curr.toFixed(2));
    }, 0);
    return totalExpenseInBRL;
  }

  render() {
    const { item:
      { value, description, method, currency,
        tag, exchangeRates } } = this.props;
    return (
      <tr>
        <td>{description}</td>
        <td>{tag}</td>
        <td>{method}</td>
        <td>{value}</td>
        <td>{exchangeRates[currency].name}</td>
        <td>{(Number(exchangeRates[currency].ask)).toFixed(2)}</td>
        <td>{(exchangeRates[currency].ask * value).toFixed(2)}</td>
        <td>Real</td>
        <button type="button">Editar</button>
        <button type="button">Remover</button>
      </tr>
      // <fieldset>
      //   <span>
      //     Valor:
      //     {expenseValue}
      //   </span>
      //   <span>
      //     Descrição:
      //     {expenseDescription}
      //   </span>
      //   <span>
      //     Moeda:
      //     {selectCurrency}
      //   </span>
      //   <span>
      //     Tag:
      //     {selectExpenseType}
      //   </span>
      //   <span>
      //     Método de Pagamento:
      //     {paymentMethod}
      //   </span>
      //   <button type="button">Editar</button>
      //   <button type="button">Remover</button>
      // </fieldset>
    );
  }
}

ItemList.propTypes = {
  item: PropTypes.string.isRequired,
  state: PropTypes.objectOf().isRequired,
};
