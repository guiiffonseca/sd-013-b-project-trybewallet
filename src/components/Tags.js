import PropTypes from 'prop-types';
import React from 'react';

class Tags extends React.Component {
  render() {
    const { onChange } = this.props;
    return (
      <div>
        <label htmlFor="selectTag">
          Tag
          <select
            name="tag"
            id="selectTag"
            onChange={ onChange }
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
      </div>
    );
  }
}

Tags.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default Tags;
