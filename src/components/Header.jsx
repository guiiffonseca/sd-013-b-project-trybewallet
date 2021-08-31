import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import HeaderForm from './HeaderForm';

class Header extends React.Component {
  render() {
    const { email } = this.props;

    return (
      <header>
        <h1>TrybeWallet</h1>
        <span data-testid="email-field">{email}</span>
        <span data-testid="total-field">0</span>
        <span data-testid="header-currency-field">BRL</span>
        <HeaderForm />
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(Header);
