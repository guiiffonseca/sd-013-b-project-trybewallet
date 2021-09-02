import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <header className="header">
        <div>
          <h1>TrybeWallet</h1>
          <h5 data-testid="email-field">
            Email:
            { email }
          </h5>
        </div>
        <div className="moedaTotal">
          <h5 data-testid="total-field">{ `Despesa Total: R$ ${0}` }</h5>
          <h5 data-testid="header-currency-field">BRL</h5>
        </div>

      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  // expenses:PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,

});

export default connect(mapStateToProps)(Header);
