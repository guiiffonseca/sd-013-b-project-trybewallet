import React from 'react';
import PropTypes from 'prop-types';

class SimpleInput extends React.Component {
  render() {
    const { id, label } = this.props;
    return (
      <label htmlFor={ id }>
        { label }
        <input id={ id } />
      </label>
    );
  }
}

SimpleInput.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
}.isRequired;

export default SimpleInput;
