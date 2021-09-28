import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class SelectCurrency extends React.Component {
  render() {
    const { currencies } = this.props;
    const MAX_LENGTH = 3;
    return (
      <label htmlFor="select-currency">
        Moeda:
        <select
          id="select-currency"
          form="transaction-data"
          name="currency"
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

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps, null)(SelectCurrency);
