import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ItemList extends Component {
  render() {
    const { item:
      { expenseValue, expenseDescription, paymentMethod, selectCurrency,
        selectExpenseType } } = this.props;
    return (
      <fieldset>
        <span>
          Valor:
          {expenseValue}
        </span>
        <span>
          Descrição:
          {expenseDescription}
        </span>
        <span>
          Moeda:
          {selectCurrency}
        </span>
        <span>
          Tag:
          {selectExpenseType}
        </span>
        <span>
          Método de Pagamento:
          {paymentMethod}
        </span>
        <button type="button">Editar</button>
        <button type="button">Remover</button>
      </fieldset>
    );
  }
}

ItemList.propTypes = {
  item: PropTypes.string.isRequired,
};
