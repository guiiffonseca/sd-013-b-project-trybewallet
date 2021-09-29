import React from 'react';
import PropTypes from 'prop-types';

class Tag extends React.Component {
  render() {
    const { onChange, value } = this.props;
    return (
      <label htmlFor="tag">
        Tag:
        <select
          id="tag"
          form="transaction-data"
          name="tag"
          onChange={ onChange }
          value={ value }
        >
          <option>Alimentação</option>
          <option>Lazer</option>
          <option>Trabalho</option>
          <option>Transporte</option>
          <option>Saúde</option>
        </select>
      </label>
    );
  }
}

export default Tag;
