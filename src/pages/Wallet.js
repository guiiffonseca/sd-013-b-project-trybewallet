import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Wallet extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <div>
        <header>
          <div data-testid="email-field">
            { email }
          </div>
          <div>
            Total despesa: R$
            <span data-testid="total-field">0</span>
          </div>
          <div>
            Câmbio atual:
            <span data-testid="header-currency-field">{' BRL'}</span>
          </div>
        </header>
      </div>
    );
  }
}

// lendo os dados do estado global: state
const mapStateToProps = (state) => ({
  // essa propriedade email tem que ter o mesmo nome da props
  email: state.user.email,
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};
export default connect(mapStateToProps)(Wallet);
