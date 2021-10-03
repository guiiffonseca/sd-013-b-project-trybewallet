import React from 'react';
import PropTypes from 'prop-types';

class InputValor extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (

      <label htmlFor="valor">
        Valor:
        <input
          type="number"
          name="value"
          id="valor"
          min="1"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

// referenc checagen de prop https://pt-br.reactjs.org/docs/typechecking-with-proptypes.html
InputValor.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputValor;
