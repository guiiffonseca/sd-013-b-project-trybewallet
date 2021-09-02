import React from 'react';
import PropTypes from 'prop-types';

class InputValor extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (

      <label htmlFor="value">
        Valor:
        <input
          type="number"
          name="valor"
          id="value"
          min="1"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

InputValor.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputValor;
