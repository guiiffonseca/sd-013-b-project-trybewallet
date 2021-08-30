import React, { Component } from 'react';

class CurrencyToAdd extends Component {
  render() {
    return (
      <label
        htmlFor="currency"
      >
        Moeda
        <select
          id="currency"
          name="currency"
        >
          <option>Temp</option>
        </select>
      </label>
    );
  }
}

export default CurrencyToAdd;
