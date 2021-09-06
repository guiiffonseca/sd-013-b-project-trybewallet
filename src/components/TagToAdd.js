import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TagToAdd extends Component {
  render() {
    const { handleSelections } = this.props;

    return (
      <label
        htmlFor="tag"
      >
        Tag
        <select
          id="tag"
          name="tag"
          onChange={ handleSelections }
        >
          <option>Alimentação</option>
          <option>Lazer</option>
          <option>Trabalho</option>
          <option>Transporte</option>
          <option>Saúde</option>
        </select>
      </label>
    );
  }
}
TagToAdd.propTypes = {
  handleSelections: PropTypes.func.isRequired,
};

export default TagToAdd;
