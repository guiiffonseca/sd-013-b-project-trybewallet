import React from 'react';
import PropTypes from 'prop-types';

class InputSelectMoed extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="select">
        Moeda:
        <select
          ame="moeda"
          d="select"
          value={ value }
          onChange={ onChange }
        >
          <option value="" disabled selected>Selecione uma moeda</option>
        </select>
      </label>
    );
  }
}

InputSelectMoed.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputSelectMoed;
