import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import fetchCurrency from '../actions/index';

class WalletInputs extends React.Component {
  async componentDidMount() {
    const { getCurrencies } = this.props;
    await getCurrencies();
  }

  render() {
    const { currencies, onChange } = this.props;
    const allCurrencies = Object.keys(currencies);
    return (
      <>
        <label htmlFor="amount">
          Valor:
          <input type="number" id="amount" name="value" onChange={ onChange } />
        </label>

        <label htmlFor="description">
          Descrição:
          <input
            autoComplete="off"
            type="text"
            id="description"
            name="description"
            onChange={ onChange }
          />
        </label>

        <label htmlFor="currency">
          Moeda:
          <select id="currency" name="currency" onChange={ onChange }>
            { allCurrencies.map((currency, index) => (
              <option
                key={ index }
                value={ currency }
              >
                { currency }
              </option>))}
          </select>
        </label>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(fetchCurrency()),
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

WalletInputs.propTypes = {
  getCurrencies: PropTypes.func.isRequired,
  currencies: PropTypes.objectOf(PropTypes.object).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(WalletInputs);
