import React from 'react';
import PropTypes from 'prop-types';

class SelectInput extends React.Component {
  render() {
    const { label, inputValue, optionsArray, handleChange } = this.props;
    return (
      <label htmlFor={ inputValue }>
        { label }
        <select
          name={ inputValue }
          id={ inputValue }
          onChange={ handleChange }
        >
          { optionsArray.map((option) => (
            <option key={ option } value={ option }>{option}</option>
          ))}
        </select>
      </label>
    );
  }
}

SelectInput.propTypes = {
  label: PropTypes.string.isRequired,
  inputValue: PropTypes.string.isRequired,
  optionsArray: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default SelectInput;
