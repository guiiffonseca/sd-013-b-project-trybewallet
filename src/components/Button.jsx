import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Button extends Component {
  render() {
    const { click, disable, label, testid, type } = this.props;
    return (
      <button
        data-testid={ testid }
        type={ (type === 'button') ? 'button' : 'submit' }
        onClick={ click }
        disabled={ disable }
      >
        { label }
      </button>
    );
  }
}

Button.propTypes = {
  click: PropTypes.func,
  disable: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  testid: PropTypes.string,
  type: PropTypes.string,
};

Button.defaultProps = {
  click: () => {},
  testid: '',
  type: 'button',
};
