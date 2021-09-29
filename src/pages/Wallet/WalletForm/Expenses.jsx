import React from 'react';
import PropTypes from 'prop-types';

class Expenses extends React.Component {
  render() {
    const { onChange, value } = this.props;
    return (
      <label htmlFor="value">
        Valor:
        <input
          type="text"
          id="value"
          name="value"
          onChange={ onChange }
          value={ value }
        />
      </label>
    );
  }
}

export default Expenses;
