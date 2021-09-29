import React from 'react';
import PropTypes from 'prop-types';

class Expenses extends React.Component {
  render() {
    const { onChange, value } = this.props;
    return (
      <label htmlFor="expenses">
        Valor:
        <input
          type="text"
          id="expenses"
          name="expenses"
          onChange={ onChange }
          value={ value }
        />
      </label>
    );
  }
}

export default Expenses;
