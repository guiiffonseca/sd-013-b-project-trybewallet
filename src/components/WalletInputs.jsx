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
    const { currencies } = this.props;
    const allCurrencies = Object.keys(currencies);
    return (
      <>
        <label htmlFor="amount">
          Valor:
          <input type="text" id="amount" name="name" />
        </label>

        <label htmlFor="description">
          Descrição:
          <input type="text" id="description" name="description" />
        </label>

        <label htmlFor="currency">
          Moeda:
          <select id="currency">
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
  currencies: PropTypes.arrayOf(PropTypes.array).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(WalletInputs);
