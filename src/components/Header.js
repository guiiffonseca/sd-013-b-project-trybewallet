import React, { Component } from 'react';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';

class Header extends Component {
  render() {
    const { email } = this.props;
    return (
      <header>
        <h3 data-Testid="email-field">
          { email }
        </h3>
        <h4 data-testid="total-field">
          0
        </h4>
        <h4 data-testid="header-currency-field">
          BRL
        </h4>
      </header>
    );
  }
}

Header.propTypes = {
  email: Proptypes.string,
}.isRequired;

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps, null)(Header);
