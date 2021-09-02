import React from 'react';
import PropTypes from 'prop-types';

class InputDespSelect extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (

      <label htmlFor="desp">
        Tag:
        <select
          name="despesa"
          id="desp"
          value={ value }
          onChange={ onChange }
        >
          <option value="" disabled selected>Selecione a despesa</option>
          <option value="alimentação">Alimentação</option>
          <option value="lazer">Lazer</option>
          <option value="trabalho">Trabalho</option>
          <option value="transporte">Transporte</option>
          <option value="saúde">Saúde</option>
        </select>
      </label>
    );
  }
}

InputDespSelect.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputDespSelect;
