import React from 'react';
import PropTypes from 'prop-types';

class SelectCoin extends React.Component {
  render() {
    const { currencys, funcao } = this.props;
    return (
      <label htmlFor="currency">
        Moeda
        <select
          role="combobox"
          name="currency"
          id="currency"
          onChange={ funcao }
        >
          {currencys
            .filter((currency) => currency !== 'USDT')
            .map((currency) => (
              <option key={ currency } value={ currency }>
                {currency}
              </option>
            ))}
        </select>
      </label>
    );
  }
}

SelectCoin.propTypes = {
  currencys: PropTypes.arrayOf([PropTypes.string]).isRequired,
  funcao: PropTypes.func.isRequired,
};

export default SelectCoin;
