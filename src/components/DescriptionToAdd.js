import React, { Component } from 'react';

class DescriptionToAdd extends Component {
  render() {
    return (
      <label
        htmlFor="description"
      >
        Descrição
        <input
          type="text"
          id="description"
          name="description"
        />
      </label>
    );
  }
}

export default DescriptionToAdd;
