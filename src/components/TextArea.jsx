import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class TextArea extends Component {
  render() {
    const { label, onChange, name, id } = this.props;
    return (
      <label htmlFor={ id }>
        { label }
        <textarea
          name={ name }
          id={ id }
          cols="20"
          rows="5"
          onChange={ onChange }
        />
      </label>
    );
  }
}

TextArea.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
