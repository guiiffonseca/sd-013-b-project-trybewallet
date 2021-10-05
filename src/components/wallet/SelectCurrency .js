import React, { Component } from 'react';

class SelectCurrency extends Component {
  render() {
    return (
      <form>
        <label htmlFor="wallet-currency">
          Moeda
          <select name="currency" id="wallet-currency">
            <option value="BRL">BRL</option>
          </select>
        </label>
      </form>
    );
  }
}

export default SelectCurrency;
