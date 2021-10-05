import React, { Component } from 'react';

class SelectKindExpense extends Component {
  render() {
    return (
      <form>
        <label htmlFor="wallet-tag">
          Tag
          <select name="payment" id="wallet-tag">
            <option value="food">Alimentação</option>
            <option value="leisure">Lazer</option>
            <option value="work">Trabalho</option>
            <option value="transport">Transporte</option>
            <option value="health">Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

export default SelectKindExpense;
