import React from 'react';
import PropTypes from 'prop-types';

class LabelWithInput extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    console.log(handleChange);
    return (
      <label htmlFor="value">
        Valor
        <input
          id="value"
          type="number"
          value={ value }
          onChange={ (event) => handleChange(event, 'value') }
        />
      </label>
    );
  }
}

LabelWithInput.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default LabelWithInput;
