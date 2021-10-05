import React, { Component } from 'react';

class InputValueExpenses extends Component {
  render() {
    return (
      <form>
        <label htmlFor="wallet-value">
          Valor
          <input
            type="number"
            name="name"
            id="wallet-value"
            placeholder="Valor da despesa"
            min="0"
          />
        </label>
      </form>

    );
  }
}

export default InputValueExpenses;
