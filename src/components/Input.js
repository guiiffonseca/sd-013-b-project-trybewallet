import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ id, labelDescrption, name, handleChange }) => (
  <label htmlFor={ name }>
    {labelDescrption}
    <input onChange={ handleChange } type="text" name={ name } id={ id } />
  </label>
);

Input.propTypes = {
  id: PropTypes.string.isRequired,
  labelDescrption: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Input;
