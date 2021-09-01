import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  render() {
    const { user } = this.props;
    return (
      <div>
        <header>
          <div data-testid="email-field">
            { user }
          </div>
          <div data-testid="total-field">
            Despesa Total: 0
          </div>
          <div data-testid="header-currency-field">
            BRL
          </div>
        </header>
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
