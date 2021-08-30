import React from 'react';

class Tags extends React.Component {
  render() {
    return (
      <label htmlFor="tag">
        Tag
        <select id="tag">
          <option value="food">Alimentação</option>
          <option value="free-time">Lazer</option>
          <option value="work">Trabalho</option>
          <option value="transport">TRansporte</option>
          <option value="health">Saúde</option>
        </select>
      </label>
    );
  }
}

export default Tags;
