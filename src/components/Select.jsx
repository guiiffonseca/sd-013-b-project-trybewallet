import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Select extends Component {
  createOptions(options) {
    return (
      options.map((option) => <option key={ option } value={ option }>{ option }</option>)
    );
  }

  render() {
    const { id, label, options } = this.props;
    return (
      <label htmlFor={ id }>
        { label }
        <select id={ id }>
          { this.createOptions(options) }
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};
