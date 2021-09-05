import React from 'react';

class Form extends React.Component {
  returnValue() {
    return (
      <label htmlFor="formValue">
        Valor
        <input type="text" name="name" id="formValue" />
      </label>
    );
  }

  returnDescription() {
    return (
      <label htmlFor="formDescription">
        Descrição
        <input type="text" name="name" id="formDescription" />
      </label>
    );
  }

  returnSelect() {
    return (
      <label htmlFor="formSelect">
        Moeda
        <select name="" id="formSelect">
          Options virá da API
        </select>
      </label>
    );
  }

  returnPaymentMethod() {
    return (
      <label htmlFor="formPaymentMethod">
        Método de pagamento
        <select name="" id="formPaymentMethod">
          <option value="dinheiro">Dinheiro</option>
          <option value="crédito">Cartão de crédito</option>
          <option value="débito">Cartão de débito</option>
        </select>
      </label>
    );
  }

  returnExpensesCategories() {
    return (
      <label htmlFor="formTag">
        Tag
        <select name="tag" id="formTag">
          <option value="alimentação">Alimentação</option>
          <option value="lazer">Lazer</option>
          <option value="trabalho">Trabalho</option>
          <option value="transporte">Transporte</option>
          <option value="saúde">Saúde</option>
        </select>
      </label>
    );
  }

  render() {
    return (
      <form>
        {this.returnValue()}
        {this.returnDescription()}
        {this.returnSelect()}
        {this.returnPaymentMethod()}
        {this.returnExpensesCategories()}
      </form>
    );
  }
}

export default Form;
