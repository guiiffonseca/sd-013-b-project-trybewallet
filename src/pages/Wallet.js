import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FormAddValue from '../component/formAddValue';
import { fetchAPI } from '../actions';

class Wallet extends React.Component {
  componentDidMount() {
    const { fetch } = this.props;
    fetch();
  }

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
  fetch: PropTypes.func,
};

Wallet.defaultProps = {
  emailState: '',
  fetch: undefined,
};

const mapStateToProps = (state) => ({
  emailState: state.user.email,
});

const mapDispatchToProps = (dispatch) => ({
  fetch: () => dispatch(fetchAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
