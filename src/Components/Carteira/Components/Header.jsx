import React from 'react';
import { connect } from 'react-redux';

function Header({ email }) {
  return (
    <div>
      <h3 data-testid="email-field">{email}</h3>
      <h3 data-testid="total-field">0</h3>
      <h3 data-testid="header-currency-field">BRL</h3>
    </div>
  );
}

const mapStateToProps = ({ user: { email } }) => ({ email });

export default connect(mapStateToProps)(Header);
