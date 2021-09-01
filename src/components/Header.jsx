import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { email } = this.props;

    return (
      <header>
        <span data-testid="email-field">{`User:${email}`}</span>
        <span data-testid="total-field">{`Total: ${0}`}</span>
        <span data-testid="header-currency-field">{`Moeda: ${'BRL'}`}</span>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps)(Header);
