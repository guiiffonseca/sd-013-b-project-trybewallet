import React from 'react';
import PropTypes from 'prop-types';

const SelectTag = ({ handleChange }) => (
  <label htmlFor="tag">
    Tag
    <select name="tag" id="tag" onChange={ handleChange }>
      <option>Alimentação</option>
      <option>Lazer</option>
      <option>Trabalho</option>
      <option>Transporte</option>
      <option>Saúde</option>
    </select>
  </label>
);

SelectTag.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default SelectTag;
