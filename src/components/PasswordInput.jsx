import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class PasswordInput extends Component {
  render() {
    const { handleChange, password } = this.props;
    return (
      <label htmlFor="password-input">
        Senha:
        <input
          data-testid="password-input"
          type="password"
          name="password"
          minLength="6"
          value={ password }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

PasswordInput.propTypes = {
  handleChange: PropTypes.func,
  password: PropTypes.string,
}.isRequeride;
