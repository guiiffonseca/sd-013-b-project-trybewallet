import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class SelectCurrency extends Component {
  render() {
    const { allCurrencies, currency, onChange } = this.props;

    return (
      <label htmlFor="currency">
        Moeda:
        {' '}
        <select
          id="currency"
          className="expensives-form-short-inputs"
          name="currency"
          value={ currency }
          onChange={ onChange }
        >
          {allCurrencies.map((item, index) => (
            <option key={ index } value={ item }>{item}</option>
          ))}
        </select>
      </label>
    );
  }
}

SelectCurrency.propTypes = {
  allCurrencies: PropTypes.object,
  handleChange: PropTypes.func,
}.isRequired;

const mapStateToProps = (state) => ({
  allCurrencies: state.wallet.currencies,
});

export default connect(mapStateToProps)(SelectCurrency);
