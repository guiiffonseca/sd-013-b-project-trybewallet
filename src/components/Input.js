import React from 'react';
import PropTypes from 'prop-types';

export default class Input extends React.Component {
  render() {
    const { name, type, text, value, change } = this.props;
    return (
      <label htmlFor={ name }>
        { text }
        <input
          name={ name }
          type={ type }
          id={ name }
          value={ value }
          onChange={ change }
        />
      </label>
    );
  }
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  change: PropTypes.func.isRequired,
};
