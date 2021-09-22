import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class SelectCurrencyForm extends Component {
  render() {
    const { currencies, loadingCurrencies, currency, handleChange } = this.props;

    return (
      <label htmlFor="select-currency">
        Moeda
        <select
          id="select-currency"
          name="currency"
          value={ currency }
          onChange={ handleChange }
        >
          {
            loadingCurrencies && currencies
              .map((eachCurrency) => {
                if (eachCurrency[0] === 'USDT') {
                  return null;
                }
                return (
                  <option
                    key={ eachCurrency[0] }
                    value={ eachCurrency[0] }
                  >
                    {eachCurrency[0]}
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
  currency: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps, null)(SelectCurrencyForm);
