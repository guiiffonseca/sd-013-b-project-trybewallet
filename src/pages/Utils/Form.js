import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Form extends Component {
  render() {
    const { currencies } = this.props;
    return (
      <form>
        <label htmlFor="expenseValue">
          Valor
          <input type="text" name="expenseValue" id="expenseValue" />
        </label>
        <label htmlFor="expenseDescription">
          Descrição
          <input type="text" name="expenseDescription" id="expenseDescription" />
        </label>
        <label htmlFor="selectCurrency">
          Moeda
          <select name="selectCurrency" id="selectCurrency">
            {currencies.map((currencie) => (
              <option value={ currencie } key={ currencie }>{currencie}</option>
            ))}
          </select>
        </label>
        <label htmlFor="paymentMethod">
          Método de Pagamento
          <select name="paymentMethod" id="paymentMethod">
            <option value="cash">Dinheiro</option>
            <option value="creditCard">Cartão de crédito</option>
            <option value="debitCard">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="expenseTag">
          Tag
          <select name="selectExpenseType" id="expenseTag">
            <option value="alimentation">Alimentação</option>
            <option value="leisure">Lazer</option>
            <option value="work">Trabalho</option>
            <option value="health">Saúde</option>
            <option value="transport">Transporte</option>
          </select>
        </label>
      </form>
    );
  }
}

Form.propTypes = {
  currencies: PropTypes.shape({
    map: PropTypes.func.isRequired,
  }).isRequired,
};

export default Form;
