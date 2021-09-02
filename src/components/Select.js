import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Option from './Option';

export default class Select extends Component {
  render() {
    const { label, id, options, onChange } = this.props;
    return (
      <label htmlFor={ id }>
        { label }
        <select name={ id } id={ id } onChange={ onChange }>
          <Option options={ options } />
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
};
