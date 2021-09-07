import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Currency extends Component {
  render() {
    const { currencies, currency, handleChange } = this.props;
    return (
      <div>
        <label htmlFor="moeda">
          Moeda
          <select
            name="currency"
            value={ currency }
            onChange={ handleChange }
            id="moeda"
          >
            {Object.keys(currencies)
              .filter((curr) => curr !== 'USDT')
              .map((curr) => (
                <option key={ curr }>{ curr }</option>
              ))}
          </select>
        </label>
      </div>
    );
  }
}

Currency.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.any).isRequired,
  handleChange: PropTypes.func.isRequired,
  currency: PropTypes.string.isRequired,
};
