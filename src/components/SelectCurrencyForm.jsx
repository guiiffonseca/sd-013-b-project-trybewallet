import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class SelectCurrencyForm extends Component {
  render() {
    const { currencies, loadingCurrencies, selectCurrency, handleChange } = this.props;

    return (
      <label htmlFor="select-currency">
        Moeda
        <select
          id="select-currency"
          name="selectCurrency"
          value={ selectCurrency }
          onChange={ handleChange }
        >
          {
            loadingCurrencies && currencies
              .map((currency) => {
                if (currency[0] === 'USDT') {
                  return null;
                }
                return (
                  <option
                    key={ currency[0] }
                    value={ currency[0] }
                  >
                    {currency[0]}
                  </option>
                );
              })
          }
        </select>
      </label>
    );
  }
}

const mapStateToProps = ({ wallet }) => ({
  currencies: wallet.currencies,
  loadingCurrencies: wallet.loadingCurrencies,
});

SelectCurrencyForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.any),
  loadingCurrencies: PropTypes.bool,
  selectCurrency: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps, null)(SelectCurrencyForm);
