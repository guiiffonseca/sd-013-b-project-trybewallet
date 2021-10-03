import React from 'react';
import PropTypes from 'prop-types';

class InputDespSelect extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (

      <label htmlFor="desp">
        Tag:
        <select
          name="tag"
          id="desp"
          value={ value }
          onChange={ onChange }
        >

          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
      </label>
    );
  }
}
// referenc checagen de prop https://pt-br.reactjs.org/docs/typechecking-with-proptypes.html
InputDespSelect.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputDespSelect;
