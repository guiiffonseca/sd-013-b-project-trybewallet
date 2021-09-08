import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setCurrency } from '../actions';

class SelectCurrencies extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.updateCurrency = this.updateCurrency.bind(this);
  }

  componentDidMount() {
    this.updateCurrency('USD');
  }

  updateCurrency(currency) {
    const { setCurrency: setCurrencyFunc } = this.props;

    setCurrencyFunc(currency);
  }

  handleChange({ target }) {
    this.updateCurrency(target.value);
  }

  render() {
    const { currencies } = this.props;
    return (
      <label htmlFor="input-currencies">
        Moeda:
        <select id="input-currencies" onChange={ this.handleChange }>
          { currencies.map((currenciesObj) => {
            const c = Object.keys(currenciesObj).map((currency) => currency);
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
  setCurrency: PropTypes.string,
}.isRequired;

const mapStateToProps = ({ wallet }) => ({
  currencies: wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrency: (tag) => dispatch(setCurrency(tag)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectCurrencies);
