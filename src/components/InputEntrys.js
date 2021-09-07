import React from 'react';

class InputEntrys extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="valor">
          Valor
          <input
            id="valor"
            type="number"
            name="valor"
            value="Valor"
          />
        </label>

        <label htmlFor="descrição">
          Descrição
          <input
            id="descrição"
            type="text"
            name="descrição"
            value="Descrição"
          />
        </label>
      </div>
    );
  }
}

export default InputEntrys;
