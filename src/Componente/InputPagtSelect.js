import React from 'react';
import PropTypes from 'prop-types';

class InputPagtSelect extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (

      <label htmlFor="pagto">
        Método de pagamento:
        <select
          name="method"
          id="pagto"
          value={ value }
          onChange={ onChange }
        >

          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
      </label>
    );
  }
}

// referenc checagen de prop https://pt-br.reactjs.org/docs/typechecking-with-proptypes.html
InputPagtSelect.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
};
export default InputPagtSelect;
