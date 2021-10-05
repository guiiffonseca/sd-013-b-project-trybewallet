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
    const { currencies, cur, onChange } = this.props;
    return (
      <form>
        <label htmlFor="wallet-cur">
          Moeda
          <select name="currency" id="wallet-cur" value={ cur } onChange={ onChange }>
            {currencies.map((currency) => {
              if (currency !== 'USDT') {
                return (
                  <option key={ currency }>
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
  cur: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectCurrency);
