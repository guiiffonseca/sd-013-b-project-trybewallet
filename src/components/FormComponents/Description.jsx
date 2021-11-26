import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Description extends Component {
  render() {
    const { description, handleChange } = this.props;
    return (
      <div>
        <label htmlFor="descrição">
          Descrição:
          <textarea
            name="description"
            value={ description }
            onChange={ handleChange }
            id="descrição"
          />
        </label>
      </div>
    );
  }
}

Description.propTypes = {
  handleChange: PropTypes.func.isRequired,
  description: PropTypes.string.isRequired,
};
