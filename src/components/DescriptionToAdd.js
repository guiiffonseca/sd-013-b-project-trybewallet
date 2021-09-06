import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DescriptionToAdd extends Component {
  render() {
    const { handleSelections } = this.props;

    return (
      <label
        htmlFor="description"
      >
        Descrição
        <input
          type="text"
          id="description"
          name="description"
          onChange={ handleSelections }
        />
      </label>
    );
  }
}

DescriptionToAdd.propTypes = {
  handleSelections: PropTypes.func.isRequired,
};

export default DescriptionToAdd;
