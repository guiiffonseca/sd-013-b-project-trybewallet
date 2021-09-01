import React from 'react';
import PropTypes from 'prop-types';

class SelectTag extends React.Component {
  render() {
    const { funcao } = this.props;
    return (
      <label htmlFor="tag">
        Tag
        <select role="combobox" name="tag" id="tag" onChange={ funcao }>
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer" selected>
            Lazer
          </option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
      </label>
    );
  }
}

SelectTag.propTypes = {
  funcao: PropTypes.func.isRequired,
};

export default SelectTag;
