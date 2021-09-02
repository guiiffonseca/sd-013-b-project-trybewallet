import React from 'react';
import PropTypes from 'prop-types';

class InputTextDesc extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (

      <label htmlFor="descri">
        Descrição:
        <input
          type="text"
          name="descricao"
          id="descri"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

InputTextDesc.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default InputTextDesc;
