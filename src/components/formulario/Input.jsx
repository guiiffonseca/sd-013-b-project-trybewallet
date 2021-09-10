import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { name, label, onChange } = this.props;
    return (
      <label htmlFor={ name }>
        { label }
        <input
          id={ name }
          name={ name }
          type="text"
          onChange={ onChange }
        />
      </label>
    );
  }
}

Input.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
};

Input.defaultProps = {
  label: '',
  name: '',
  onChange: null,
};

export default Input;
