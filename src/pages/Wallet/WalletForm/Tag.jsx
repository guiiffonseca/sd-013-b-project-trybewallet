import React from 'react';

class Tag extends React.Component {
  render() {
    return (
      <label htmlFor="tag">
        Tag:
        <select
          id="tag"
          form="transaction-data"
          name="tag"
        >
          <option>Alimentação</option>
          <option>Lazer</option>
          <option>Trabalho</option>
          <option>Transporte</option>
          <option>Saúde</option>
        </select>
      </label>
    );
  }
}

export default Tag;
