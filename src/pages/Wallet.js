import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Wallet extends React.Component {
  render() {
    const { userEmail } = this.props;
    return (
      <div>
        <header>
          <span data-testid="email-field">
            {`Carteira de ${userEmail}`}
          </span>
          <span data-testid="total-field">
            {`${0}`}
          </span>
          <span data-testid="header-currency-field">
            BRL
          </span>
        </header>
      </div>
    );
  }
}

Wallet.propTypes = {
  userEmail: PropTypes.string,
}.isRequired;

const mapStateToProps = ({ user }) => ({
  userEmail: user.email,
});

export default connect(mapStateToProps)(Wallet);
