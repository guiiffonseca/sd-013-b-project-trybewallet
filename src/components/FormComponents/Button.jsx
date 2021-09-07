import React, { Component } from 'react';

export default class Button extends Component {
  render() {
    const { handleClick } = this.props;
    return (
      <div>
        <label htmlFor="botão-despesa">
          <button
            type="submit"
            id="botão-despesa"
            onClick={ handleClick }
          >
            Adicionar despesa
          </button>
        </label>
      </div>
    );
  }
}
