import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { setEmail } = this.props;
    return (
      <div style={{ display: 'flex' }}>
        <p data-testid="email-field">{ setEmail }</p>
        <span data-testid="total-field">0</span>
        <p data-testid="header-currency-field">
          BRL
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  setEmail: state.user.email,
});

export default connect(mapStateToProps, null)(Header);
