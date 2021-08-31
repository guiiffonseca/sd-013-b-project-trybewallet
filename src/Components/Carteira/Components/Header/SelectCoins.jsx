import React from 'react';
import PropTypes from 'prop-types';

export default function SelectCoins({ handlerChange, coins, Value }) {
  return (
    <label htmlFor="coin">
      Moeda:
      <select onChange={ handlerChange } name="currency" id="coin" value={ Value }>
        {
          coins.map((coin) => (
            <option value={ coin.code } key={ coin.key }>
              {coin.code}
            </option>
          ))
        }
      </select>
    </label>
  );
}

SelectCoins.propTypes = {
  handlerChange: PropTypes.func.isRequired,
  coins: PropTypes.arrayOf(PropTypes.object).isRequired,
  Value: PropTypes.string.isRequired,
};
