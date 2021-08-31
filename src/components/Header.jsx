import React, { Component } from 'react';
import { connect } from 'react-redux';
import { string } from 'prop-types';

class Header extends Component {
  render() {
    const { email } = this.props;
    console.log(email);
    return (
      <header>
        <p data-testid="email-field">{ email }</p>
        <p data-testid="total-field">{ `R$${0}`}</p>
        <p data-testid="header-currency-field">BRL</p>
      </header>
    );
  }
}
Header.propTypes = {
  email: string.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps, null)(Header);
