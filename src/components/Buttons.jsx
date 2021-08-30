import React from 'react';
import PropTypes from 'prop-types';

export default class Button extends React.Component {
  render() {
    const { name, onClick } = this.props;
    return (
      <button type="button" onClick={ onClick }>
        {name}
      </button>
    );
  }
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
