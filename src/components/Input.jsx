import React from 'react';

class Input extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="value">
          Valor:
          <input
            type="number"
            name="value"
            id="value"
          />
        </label>
        <label htmlFor="description">
          Descrição:
          <input
            type="text"
            name="description"
            id="description"
          />
        </label>
      </div>
    );
  }
}

export default Input;
