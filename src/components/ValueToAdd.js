import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ValueToAdd extends Component {
  render() {
    const { handleSelections } = this.props;

    return (
      <label
        htmlFor="value"
      >
        Valor
        <input
          type="number"
          id="value"
          name="value"
          onChange={ handleSelections }
        />
      </label>
    );
  }
}

ValueToAdd.propTypes = {
  handleSelections: PropTypes.func.isRequired,
};

export default ValueToAdd;
