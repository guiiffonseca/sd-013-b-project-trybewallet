import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  render() {
    const { userEmail } = this.props;
    return (
      <>
        <p data-testid="email-field">{userEmail.email}</p>
        <p>
          Gastos: R$
          <span data-testid="total-field">0</span>
        </p>
        <p>
          Câmbio:
          <span data-testid="header-currency-field">BRL</span>
        </p>
      </>
    );
  }
}

Wallet.propTypes = {
  userEmail: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  userEmail: state.user,
});

export default connect(mapStateToProps)(Wallet);
