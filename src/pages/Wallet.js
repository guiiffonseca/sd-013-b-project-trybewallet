import React from 'react';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  render() {
    const { email } = this.props;
    return (<div>
      <h1>TrybeWallet</h1>
      <span data-testid="email-field">{email}</span>
      <span data-testid="total-field" />
      <span data-testid="header-currency-field">BRL</span>
    </div>);
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps)(Wallet);
