import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Wallet extends React.Component {
  render() {
    const { email } = this.props;
    const { user } = email;
    const despesa = 0;

    return (
      <header>
        <p data-testid="email-field">{user.email}</p>
        <p data-testid="total-field">
          Despesa total:
          {despesa}

        </p>
        <p data-testid="total-field">BRL</p>
      </header>

    );
  }
}

function mapStateToProps(state) {
  return {
    email: state,
  };
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,

};

export default connect(mapStateToProps, null)(Wallet);
