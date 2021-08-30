import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ExpenseOption extends Component {
  render() {
    const { labelContent, name, values, handleChange } = this.props;
    return (
      <label htmlFor={ name }>
        { labelContent }
        <select name={ name } id={ name } onChange={ handleChange }>
          { values.map((value, index) => (
            <option key={ index } value={ value }>{value}</option>
          ))}
        </select>
      </label>
    );
  }
}

export default ExpenseOption;

ExpenseOption.propTypes = {
  labelContent: PropTypes.string,
  name: PropTypes.string,
  values: PropTypes.arrayOf(PropTypes.any),
}.isRequired;
