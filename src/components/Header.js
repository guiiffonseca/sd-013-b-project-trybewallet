import React from 'react';
import { connect } from 'react-redux';
import { string } from 'prop-types';

class Header extends React.Component {
  render() {
    const { email } = this.props;

    return (
      <header>
        <p data-testid="email-field">{ email }</p>
        <p data-testid="total-field">{ `R$${0}` }</p>
        <p data-testid="header-currency-field">BRL</p>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

Header.propTypes = {
  email: string.isRequired,
};

export default connect(mapStateToProps)(Header);
