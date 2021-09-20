import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class SelectTagForm extends Component {
  render() {
    const { selectTag, handleChange } = this.props;

    return (
      <label htmlFor="select-tag">
        Tag
        <select
          id="select-tag"
          name="selectTag"
          value={ selectTag }
          onChange={ handleChange }
        >
          <option selected value="alimentacao">Alimentação</option>
          <option value="lazer">Lazer</option>
          <option value="trabalho">Trabalho</option>
          <option value="transporte">Transporte</option>
          <option value="saude">Saúde</option>
        </select>
      </label>
    );
  }
}

SelectTagForm.propTypes = {
  selectTag: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;

export default connect(null, null)(SelectTagForm);
