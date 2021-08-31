import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

export default class Header extends Component {
  render() {
    const { email } = this.props;
    return (
      <header>
        <div data-testid="email-field">
          { email }
        </div>
        <div data-testid="total-field">
          <p>0</p>
        </div>
        <div data-testid="header-currency-field">
          BRL
        </div>
      </header>
    );
  }
}

Header.propTypes = ({
  email: PropTypes.string.isRequired,
});
