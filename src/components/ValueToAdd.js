import React, { Component } from 'react';

class ValueToAdd extends Component {
  render() {
    return (
      <label
        htmlFor="value"
      >
        Valor
        <input
          type="number"
          id="value"
          name="value"
        />
      </label>
    );
  }
}

export default ValueToAdd;
