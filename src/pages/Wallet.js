import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Form from '../components/form';

class Wallet extends React.Component {
  render() {
    const { user } = this.props;
    return (
      <div>
        <header>
          <span data-testid="email-field">
            { user }
          </span>
          <span data-testid="total-field">
            Despesa Total: 0
          </span>
          <span data-testid="header-currency-field">
            BRL
          </span>
        </header>
        <Form />
      </div>
    );
  }
}

Wallet.propTypes = {
  user: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Wallet);
