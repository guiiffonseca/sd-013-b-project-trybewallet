import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputValueExpenses extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <form>
        <label htmlFor="wallet-value">
          Valor
          <input
            type="number"
            name="value"
            value={ value }
            id="wallet-value"
            onChange={ onChange }
            placeholder="Valor da despesa"
            min="0"
          />
        </label>
      </form>

    );
  }
}

InputValueExpenses.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputValueExpenses;
