import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Button extends Component {
  render() {
    const { handleClick } = this.props;
    return (
      <div>
        <button
          type="submit"
          id="botão-despesa"
          data-testid="botão-despesa"
          onClick={ handleClick }
        >
          Adicionar despesa
        </button>
      </div>
    );
  }
}

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
