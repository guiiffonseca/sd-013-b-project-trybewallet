import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Coins extends Component {
  render() {
    const { handelChange, currency, currencies } = this.props;
    return (
      <label htmlFor="currency">
        Moeda :
        <select
          name="currency"
          id="currency"
          onChange={ handelChange }
          value={ currency }
        >
          {currencies.map((curr, i) => (
            <option key={ i } value={ curr }>{ curr }</option>))}
        </select>
      </label>
    );
  }
}

Coins.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.shape({ map: PropTypes.func })).isRequired,
  currency: PropTypes.string.isRequired,
  handelChange: PropTypes.func.isRequired,
};

export default Coins;
