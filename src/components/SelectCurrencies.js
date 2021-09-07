import React from 'react';
import PropTypes from 'prop-types';

class SelectCurrencies extends React.Component {
  render() {
    return (
      <label htmlFor="input-currencies">
        Moeda:
        <select id="input-currencies">
          <option>
            Moeda
          </option>
        </select>
      </label>
    );
  }
}

SelectCurrencies.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
}.isRequired;

export default SelectCurrencies;
