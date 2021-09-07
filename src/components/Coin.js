import PropTypes from 'prop-types';
import React from 'react';

class Coin extends React.Component {
  render() {
    const { currencies } = this.props;
    return (
      <div>
        <label htmlFor="moeda">
          Moeda
          <select
            name="moeda"
            id="moeda"
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
};

export default Coin;
