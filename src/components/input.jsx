import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { name, label } = this.props;
    return (
      <label htmlFor={ name }>
        { label }
        <input type="text" name={ name } id={ name } />
      </label>
    );
  }
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default Input;
