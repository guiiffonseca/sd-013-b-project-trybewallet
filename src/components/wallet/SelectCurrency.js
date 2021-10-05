import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import fetchCurrencies from '../../services/economyAPI';

class SelectCurrency extends Component {
  componentDidMount() {
    const { updatingCurrencies } = this.props;
    updatingCurrencies();
  }

  render() {
    const { currencies } = this.props;
    return (
      <form>
        <label htmlFor="wallet-currency">
          Moeda
          <select name="currency" id="wallet-currency">
            {currencies.map((currency) => {
              if (currency !== 'USDT') {
                return (
                  <option
                    name={ currency }
                    key={ currency }
                  >
                    {currency}
                  </option>
                );
              }
              return null;
            })}
          </select>
        </label>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updatingCurrencies: () => dispatch(fetchCurrencies()),
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

SelectCurrency.propTypes = {
  updatingCurrencies: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectCurrency);
