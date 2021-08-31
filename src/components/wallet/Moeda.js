import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Select from '../std/Select';

class Moeda extends React.Component {
  render() {
    const {
      props: {
        value,
        handleChange,
        coins,
      },
    } = this;

    const optionsArray = Object.keys(coins)
      .filter((coin) => coin !== 'USDT')
      .map((coin) => ({ value: coin, text: coin }));
    return (
      <Select
        name="currency"
        labelText="Moeda:"
        value={ value }
        handleChange={ handleChange }
        options={ optionsArray }
      />
    );
  }
}

const mapStateToProps = (state) => ({
  coins: state.wallet.currencies,
});

const { string, func, array } = PropTypes;
Moeda.propTypes = {
  value: string.isRequired,
  handleChange: func.isRequired,
  coins: array.isRequired,
}.isRequired;

export default connect(mapStateToProps, null)(Moeda);
