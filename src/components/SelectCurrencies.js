import React from 'react';
import PropTypes from 'prop-types';

const SelectCurrencies = ({ atualCurrency, handleChange, currenciesList }) => (
  <label htmlFor="moeda">
    Moeda
    <select
      id="moeda"
      name="atualCurrency"
      value={ atualCurrency }
      onChange={ handleChange }
    >
      {currenciesList.map((curValue) => (
        <option key={ curValue }>{curValue}</option>
      ))}
    </select>
  </label>
);

SelectCurrencies.propTypes = {
  atualCurrency: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  currenciesList: PropTypes.arrayOf().isRequired,
};

export default SelectCurrencies;
