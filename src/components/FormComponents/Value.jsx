import React, { Component } from 'react';

export default class Value extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <div>
        <label htmlFor="valor">
          Valor:
          <input
            type="text"
            name="value"
            value={ value }
            onChange={ handleChange }
            id="valor"
          />
        </label>
      </div>
    );
  }
}
