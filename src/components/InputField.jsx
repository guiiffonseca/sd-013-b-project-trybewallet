import React from 'react';
import PropTypes from 'prop-types';

class InputField extends React.Component {
  render() {
    const { setclass, testid, onchange, placeholder, name, type } = this.props;
    return (
      <div>
        <input
          data-testid={ testid }
          className={ setclass }
          onChange={ onchange }
          placeholder={ placeholder }
          name={ name }
          type={ type }
        />
      </div>
    );
  }
}

InputField.propTypes = {
  setclass: PropTypes.string,
  name: PropTypes.string,
  onchange: PropTypes.func,
  placeholder: PropTypes.string,
  testid: PropTypes.string,
  type: PropTypes.string,
}.isRequired;

export default InputField;
