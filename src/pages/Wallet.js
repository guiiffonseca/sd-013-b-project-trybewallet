import React from 'react';
import { connect } from 'react-redux';
// import { userInformation as userInformationAction } from '../actions';
import { PropTypes } from 'prop-types';

class Wallet extends React.Component {
  render() {
    const { email } = this.props;
    console.log(email);
    return (
      <>
        <header>
          <div data-testid="email-field">
            { email }
          </div>
          <div data-testid="total-field">
            <p>0</p>
          </div>
          <div data-testid="header-currency-field">
            BRL
          </div>
        </header>
        <div>TrybeWallet</div>
      </>
    );
  }
}

Wallet.propTypes = ({
  email: PropTypes.string,
}.isRequired);

const mapStateToProps = ({ user }) => ({
  email: user.email,
});

export default connect(mapStateToProps)(Wallet);
