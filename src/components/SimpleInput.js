import React from 'react';
import PropTypes from 'prop-types';

class SimpleInput extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { updateState } = this.props;

    updateState(target.value);
  }

  render() {
    const { id, label } = this.props;
    return (
      <label htmlFor={ id }>
        { label }
        <input id={ id } onChange={ this.handleChange } />
      </label>
    );
  }
}

SimpleInput.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
}.isRequired;

export default SimpleInput;
