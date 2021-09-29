import React from 'react';
import PropTypes from 'prop-types';

class Description extends React.Component {
  render() {
    const { onChange, value } = this.props;
    return (
      <label htmlFor="description">
        Descrição:
        <input
          type="text"
          id="description"
          name="description"
          onChange={ onChange }
          value={ value }
        />
      </label>
    );
  }
}

export default Description;
