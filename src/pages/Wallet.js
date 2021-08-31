import React from 'react';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <>
        <h1 data-testid="email-field">{ email }</h1>
        <h2 data-testid="total-field">0</h2>
        <h2 data-testid="header-currency-field">BRL</h2>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps)(Wallet);
