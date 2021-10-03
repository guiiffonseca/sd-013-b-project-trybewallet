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
          name="description"
          id="descri"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

// referenc checagen de prop https://pt-br.reactjs.org/docs/typechecking-with-proptypes.html
InputTextDesc.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
};
export default InputTextDesc;
