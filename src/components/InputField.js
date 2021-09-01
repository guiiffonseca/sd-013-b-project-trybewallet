import React, { Component } from 'react';

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

export default InputField;
