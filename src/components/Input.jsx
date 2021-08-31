import React from 'react';
import PropTypes from 'prop-types';

export default class Input extends React.Component {
  render() {
    const { type, name, id, placeholder, value, onChange, dataTestId } = this.props;
    return (
      <input
        type={ type }
        name={ name }
        id={ id }
        placeholder={ placeholder }
        value={ value }
        onChange={ onChange }
        data-testid={ dataTestId }
      />
    );
  }
}

Input.propTypes = {
  dataTestId: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
