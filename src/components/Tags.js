import React from 'react';

class Tags extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="selectTag">
          Tag
          <select
            name="selectTag"
            id="selectTag"
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
      </div>
    );
  }
}

export default Tags;
