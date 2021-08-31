import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { getCurrencyThunk } from '../actions';
import Form from './Utils/Form';

class Wallet extends React.Component {
  componentDidMount() {
    const { setCurrency } = this.props;
    setCurrency();
  }

  render() {
    const { state: { user, wallet: { currencies } } } = this.props;
    const currenciesArray = Object.keys(currencies);
    currenciesArray.splice(1, 1);
    return (
      <>
        <p data-testid="email-field">{user.email}</p>
        <p>
          Gastos: R$
          <span data-testid="total-field">0</span>
        </p>
        <p>
          Câmbio:
          <span data-testid="header-currency-field">BRL</span>
        </p>
        <Form currencies={ currenciesArray } />
      </>
    );
  }
}

Wallet.propTypes = {
  setCurrency: PropTypes.func.isRequired,
  state: PropTypes.arrayOf().isRequired,
};

const mapStateToProps = (state) => ({ state });
const mapDispatchToProps = (dispatch) => ({
  setCurrency: () => dispatch(getCurrencyThunk()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
