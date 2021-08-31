import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      moeda: 'BRL',
    };
  }

  render() {
    const { user: { email } } = this.props;
    const { total, moeda } = this.state;
    return (
      <div>
        <header>
          <div data-testid="email-field">
            Email:
            { email }
          </div>
          {' '}
          <span data-testid="total-field">
            Despesa Total: R$
            { total }
          </span>
          {' '}
          <span data-testid="header-currency-field">
            { moeda }
          </span>
        </header>
      </div>);
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(Wallet);

Wallet.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string,
  }).isRequired,
};
