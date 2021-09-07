import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class SelectCurrencies extends React.Component {
  render() {
    const { currencies } = this.props;
    console.log('currencies', currencies);

    return (
      <label htmlFor="input-currencies">
        Moeda:
        <select id="input-currencies">
          { currencies.map((currenciesObj) => {
            const c = Object.keys(currenciesObj).map((currencie) => currencie);
            return (
              <option key={ c } id={ c }>
                { c }
              </option>
            );
          }) }
        </select>
      </label>
    );
  }
}

SelectCurrencies.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
}.isRequired;

const mapStateToProps = ({ wallet }) => ({
  currencies: wallet.currencies,
});

export default connect(mapStateToProps)(SelectCurrencies);
