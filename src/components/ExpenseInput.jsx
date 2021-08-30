import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ExpenseInput extends Component {
  render() {
    const { labelContent, type, name } = this.props;
    return (
      <label htmlFor={ name }>
        { labelContent }
        <input type={ type } name={ name } id={ name } />
      </label>
    );
  }
}

export default ExpenseInput;

ExpenseInput.propTypes = {
  labelContent: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
}.isRequired;
