import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { id, name, type, placeholder, test, onChange } = this.props;
    return (
      <input
        id={ id }
        name={ name }
        type={ type }
        placeholder={ placeholder }
        data-testid={ test }
        onChange={ onChange }
      />
    );
  }
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  test: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
