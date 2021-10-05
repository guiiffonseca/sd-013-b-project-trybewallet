import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { email } = this.props;
    return (
      <header>
        <h1 data-testid="email-field">{email}</h1>
        <p data-testid="total-field"> Total gasto: R$ 0</p>
        <p data-testid="header-currency-field">BRL</p>

      </header>
    );
  }
}
Header.propTypes = {
  email: PropTypes.number.isRequired,

};

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps)(Header);
