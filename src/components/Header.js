import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { setEmail, total } = this.props;
    return (
      <header className="header">
        <div>
          <p data-testid="email-field">{ setEmail }</p>
        </div>
        <div>
          <span data-testid="total-field">
            { total.reduce(
              (acc, currenty) => acc + currenty.value * currenty
                .exchangeRates[currenty.currency].ask, 0,
            ).toFixed(2)}
          </span>
        </div>
        <div>
          <p data-testid="header-currency-field">
            BRL
          </p>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  setEmail: state.user.email,
  total: state.wallet.expenses,
});

Header.propTypes = {
  setEmail: PropTypes.string.isRequired,
  total: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, null)(Header);
