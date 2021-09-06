import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Inputs extends Component {
  render() {
    const { valor, descricao, handelChange } = this.props;
    return (
      <>
        <label htmlFor="valor">
          Valor :
          <input
            type="number"
            name="valor"
            id="valor"
            value={ valor }
            onChange={ handelChange }
          />
        </label>
        <label htmlFor="descricao">
          Descrição :
          <input
            type="text"
            name="descricao"
            id="descricao"
            value={ descricao }
            onChange={ handelChange }
          />
        </label>
      </>
    );
  }
}

Inputs.propTypes = {
  valor: PropTypes.number.isRequired,
  descricao: PropTypes.string.isRequired,
  handelChange: PropTypes.func.isRequired,
};

export default Inputs;
