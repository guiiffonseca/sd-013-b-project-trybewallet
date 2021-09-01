import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputField extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { handleChange, labelName, value, type, name } = this.props;
    return (
      <label htmlFor={ labelName }>
        { labelName }
        <input
          type={ type }
          name={ name }
          value={ value }
          id={ labelName }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

InputField.propTypes = {
  handleChange: PropTypes.func.isRequired,
  labelName: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

export default InputField;
