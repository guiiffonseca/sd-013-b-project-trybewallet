import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FormAddValue from '../component/formAddValue';

class Wallet extends React.Component {
  render() {
    const { emailState } = this.props;
    return (
      <div>
        <div>
          <h3>
            Usuário:
            {' '}
            <span data-testid="email-field">{emailState}</span>
          </h3>
          <p>
            Total: R$
            {' '}
            <span data-testid="total-field">0</span>
            {' '}
            <span data-testid="header-currency-field">BRL</span>
          </p>
        </div>
        <FormAddValue />
      </div>
    );
  }
}

Wallet.propTypes = {
  emailState: PropTypes.string,
};

Wallet.defaultProps = {
  emailState: '',
};

const mapStateToProps = (state) => ({
  emailState: state.user.email,
});

export default connect(mapStateToProps, null)(Wallet);
