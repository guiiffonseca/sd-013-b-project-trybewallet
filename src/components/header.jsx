import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { email } = this.props;
    return (
      <header className="header-container">
        <section>Trybe Wallet</section>
        <section data-testid="email-field">{`Email: ${email}`}</section>
        <section data-testid="total-field">Despesa Total: 0</section>
        <section data-testid="header-currency-field">BRL</section>
      </header>
    );
  }
}

Header.propTypes = ({
  email: PropTypes.string,
}).isRequired;

const mapStateToProps = ({ user: { email } }) => ({ email });

export default connect(mapStateToProps)(Header);
