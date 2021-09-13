import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class SelectCurrency extends Component {
  render() {
    const { allCurrencies } = this.props;
    // const currenciesArray = Object.values(allCurrencies);

    return (
      <label htmlFor="moeda">
        Moeda:
        {' '}
        <select
          id="moeda"
          className="expensives-form-short-inputs"
          name="moeda"
          // value={  }
          // onChange={ handleChange }
        >
          {allCurrencies.map((currency, index) => (
            <option key={ index } value={ currency }>{currency}</option>
          ))}
        </select>
      </label>
    );
  }
}

SelectCurrency.propTypes = {
  allCurrencies: PropTypes.object,
}.isRequired;

const mapStateToProps = (state) => ({
  allCurrencies: state.wallet.currencies,
});

export default connect(mapStateToProps)(SelectCurrency);
