import React, { Component } from 'react';

class InputDescribeExpenses extends Component {
  render() {
    return (
      <form>
        <label htmlFor="wallet-describe-expense">
          Descrição
          <input
            type="text"
            name="expense"
            id="wallet-describe-expense"
            placeholder="Descrição da despesa"

          />
        </label>
      </form>

    );
  }
}

export default InputDescribeExpenses;
