import React from 'react';
import PropTypes from 'prop-types';

class Tags extends React.Component {
  render() {
    const { onChange } = this.props;
    return (
      <label htmlFor="tag">
        Tag
        <select id="tag" name="tag" onChange={ onChange }>
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

Tags.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default Tags;
