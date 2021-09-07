import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import WalletForm from '../components/WalletForm';
import { fetchCurrenciesAPI } from '../actions';

class Wallet extends React.Component {
  componentDidMount() {
    const { currenciesAPI } = this.props;
    currenciesAPI();
  }

  render() {
    const { userEmail } = this.props;
    return (
      <div>
        <header>
          <span data-testid="email-field">
            {`Carteira de ${userEmail}`}
          </span>
          <span data-testid="total-field">
            {`${0}`}
          </span>
          <span data-testid="header-currency-field">
            BRL
          </span>
        </header>
        <WalletForm />
      </div>
    );
  }
}

Wallet.propTypes = {
  userEmail: PropTypes.string,
}.isRequired;

const mapStateToProps = ({ user }) => ({
  userEmail: user.email,
});

const mapDispatchToProps = (dispatch) => ({
  currenciesAPI: () => dispatch(fetchCurrenciesAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
