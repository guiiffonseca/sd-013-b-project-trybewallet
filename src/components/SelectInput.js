import React from 'react';
import PropTypes from 'prop-types';

class SelectInput extends React.Component {
  render() {
    const { label, inputValue, optionsArray, handleChange, placeholder } = this.props;
    return (
      <label htmlFor={ inputValue }>
        { label }
        <select
          name={ inputValue }
          id={ inputValue }
          onChange={ handleChange }
          value={ placeholder }
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
  placeholder: PropTypes.string.isRequired,
};

export default SelectInput;
