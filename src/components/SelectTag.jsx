import React from 'react';
import PropTypes from 'prop-types';

class SelectTag extends React.Component {
  render() {
    const { name, role } = this.props;
    return (
      <label htmlFor={ name }>
        Tag
        <select role={ role } name={ name } id={ name }>
          <option value="alimentacao">Alimentação</option>
          <option value="lazer" selected>
            Lazer
          </option>
          <option value="trabalho">Trabalho</option>
          <option value="transporte">Transporte</option>
          <option value="saude">Saúde</option>
        </select>
      </label>
    );
  }
}

SelectTag.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
};

export default SelectTag;
