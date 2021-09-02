import React from 'react';
import PropTypes from 'prop-types';

class InputPagtSelect extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (

      <label htmlFor="pagto">
        Método de pagamento:
        <select
          name="formPagto"
          id="pagto"
          value={ value }
          onChange={ onChange }
        >
          <option value="" disabled selected>Selecione forma de Pagamento</option>
          <option value="dinheiro">Dinheiro</option>
          <option value="crédito">Cartão de crédito</option>
          <option value="débito">Cartão de débito</option>
        </select>
      </label>
    );
  }
}

InputPagtSelect.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default InputPagtSelect;
