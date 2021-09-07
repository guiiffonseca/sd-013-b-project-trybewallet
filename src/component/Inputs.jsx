import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Inputs extends Component {
  render() {
    const { value, description, handelChange } = this.props;
    return (
      <>
        <label htmlFor="value">
          Valor :
          <input
            type="text"
            name="value"
            id="value"
            value={ value }
            onChange={ handelChange }
          />
        </label>
        <label htmlFor="description">
          Descrição :
          <input
            type="text"
            name="description"
            id="description"
            value={ description }
            onChange={ handelChange }
          />
        </label>
      </>
    );
  }
}

Inputs.propTypes = {
  value: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  handelChange: PropTypes.func.isRequired,
};

export default Inputs;
