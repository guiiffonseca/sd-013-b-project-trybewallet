import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FormularyExpenses from '../components/FormularyExpenses';

class Wallet extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <>
        <header>
          <p data-testid="email-field">
            { email }
          </p>
          <span data-testid="total-field">
            0
          </span>
          <p data-testid="header-currency-field">
            BRL
          </p>
        </header>
        <FormularyExpenses />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Wallet);
