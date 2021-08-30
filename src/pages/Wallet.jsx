import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AddExpense from './AddExpense';
import { fetchCurrencies } from '../actions/index';

class Wallet extends React.Component {
  componentDidMount() {
    const { fetchApi } = this.props;
    fetchApi();
  }

  render() {
    const { userLogged, currencies } = this.props;
    return (
      <div>
        <h3 data-testid="email-field">
          Usuário logado:
          {' '}
          {userLogged}
        </h3>
        <h3>
          Despesa total:
          {' '}
          <span data-testid="total-field">0</span>
        </h3>
        <h3>
          Câmbio utlizado:
          {' '}
          <span data-testid="header-currency-field">BRL</span>
        </h3>
        <AddExpense currencies={ currencies } />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchApi: () => dispatch(fetchCurrencies()),
});

const mapStateToProps = (state) => ({
  userLogged: state.user.email,
  currencies: state.wallet.currencies,
});

Wallet.propTypes = {
  userLogged: PropTypes.string.isRequired,
  fetchApi: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
