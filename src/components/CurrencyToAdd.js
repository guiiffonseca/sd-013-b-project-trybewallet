import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCurrencies } from '../actions';

class CurrencyToAdd extends Component {
  constructor(props) {
    super(props);
    this.loadCurrencies = this.loadCurrencies.bind(this);
  }

  componentDidMount() {
    this.loadCurrencies();
  }

  loadCurrencies() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  render() {
    const { currenciesFromState, handleSelections } = this.props;
    return (
      <label
        htmlFor="currency"
      >
        Moeda
        <select
          id="currency"
          name="currency"
          onChange={ handleSelections }
        >
          {
            currenciesFromState.map((currency, index) => (
              <option
                key={ index }
              >
                { currency }
              </option>
            ))
          }
        </select>
      </label>
    );
  }
}

const mapStateToProps = (state) => ({
  currenciesFromState: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(fetchCurrencies()),
});

CurrencyToAdd.propTypes = {
  currenciesFromState: PropTypes.arrayOf(PropTypes.any).isRequired,
  getCurrencies: PropTypes.func.isRequired,
  handleSelections: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyToAdd);
