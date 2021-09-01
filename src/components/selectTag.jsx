import React from 'react';

class SelectTag extends React.Component {
  render() {
    return (
      <label htmlFor="tag">
        Tag
        <select name="tag" id="tag">
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

export default SelectTag;
