import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class EmailInput extends Component {
  render() {
    const { handleChange, email } = this.props;
    return (
      <label htmlFor="email-input">
        Login:
        <input
          onChange={ handleChange }
          value={ email }
          data-testid="email-input"
          type="email"
          name="email"
        />
      </label>
    );
  }
}

EmailInput.propTypes = {
  handleChange: PropTypes.func,
  email: PropTypes.string,
}.isRequired;
