import PropTypes from 'prop-types';
import React from 'react';

class Coin extends React.Component {
  render() {
    const { currencies, onChange } = this.props;
    return (
      <div>
        <label htmlFor="moeda">
          Moeda
          <select
            name="currency"
            id="moeda"
            onChange={ onChange }
          >
            {currencies.map((item) => (
              <option value={ item } key={ item }>
                { item }
              </option>
            ))}
            Moeda
          </select>
        </label>
      </div>
    );
  }
}

Coin.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Coin;
