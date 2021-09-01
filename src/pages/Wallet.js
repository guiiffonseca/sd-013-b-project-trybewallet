import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  render() {
    const { user } = this.props;
    console.log(user);
    return (
      <div>
        <h2 data-testid="email-field">{ user.email }</h2>
        <h3 data-testid="total-field">0</h3>
        <h3 data-testid="header-currency-field">BRL</h3>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user });

Wallet.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string.isRequired,
  }).isRequired,
};
export default connect(mapStateToProps)(Wallet);
