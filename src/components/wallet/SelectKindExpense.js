import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SelectKindExpense extends Component {
  render() {
    const { tag, onChange } = this.props;
    return (
      <form>
        <label htmlFor="wallet-tag">
          Tag
          <select name="tag" value={ tag } id="wallet-tag" onChange={ onChange }>
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

SelectKindExpense.propTypes = {
  tag: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SelectKindExpense;
