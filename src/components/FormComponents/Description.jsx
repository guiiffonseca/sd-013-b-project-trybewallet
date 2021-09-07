import React, { Component } from 'react';

export default class Description extends Component {
  render() {
    const { description, handleChange } = this.props;
    return (
      <div>
        <label htmlFor="descrição">
          Descrição:
          <textarea
            name="description"
            value={ description }
            onChange={ handleChange }
            id="descrição"
          />
        </label>
      </div>
    );
  }
}
