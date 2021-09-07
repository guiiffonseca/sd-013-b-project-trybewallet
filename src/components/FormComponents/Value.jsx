import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Value extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <div>
        <label htmlFor="valor">
          Valor:
          <input
            type="text"
            name="value"
            value={ value }
            onChange={ handleChange }
            id="valor"
          />
        </label>
      </div>
    );
  }
}

Value.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
};
