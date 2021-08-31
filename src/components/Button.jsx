import React from 'react';
import PropTypes from 'prop-types';

export default class Button extends React.Component {
  render() {
    const { name, onClick, isDisabled } = this.props;
    return (
      <button type="button" onClick={ onClick } disabled={ isDisabled }>
        {name}
      </button>
    );
  }
}

Button.propTypes = {
  isDisabled: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
