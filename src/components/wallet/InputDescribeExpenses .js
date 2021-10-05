import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputDescribeExpenses extends Component {
  render() {
    const { expense, onChange } = this.props;
    return (
      <form>
        <label htmlFor="wallet-describe-expense">
          Descrição
          <input
            type="text"
            name="description"
            value={ expense }
            id="wallet-describe-expense"
            onChange={ onChange }
            placeholder="Descrição da despesa"

          />
        </label>
      </form>

    );
  }
}

InputDescribeExpenses.propTypes = {
  expense: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputDescribeExpenses;
