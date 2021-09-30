import React from 'react';
import PropTypes from 'prop-types';

class SelectCurrency extends React.Component {
  render() {
    const { currencies, onChange, value } = this.props;
    const MAX_LENGTH = 3;
    return (
      <label htmlFor="select-currency">
        Moeda:
        <select
          id="select-currency"
          form="transaction-data"
          name="currency"
          onChange={ onChange }
          value={ value }
        >
          {
            Object.keys(currencies)
              .filter((currency) => currency.length <= MAX_LENGTH)
              .map((fiat) => (
                <option key={ fiat }>{ fiat }</option>
              ))
          }
        </select>
      </label>
    );
  }
}

SelectCurrency.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  currencies: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default SelectCurrency;
