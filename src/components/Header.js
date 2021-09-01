import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currency: 'BOL',
    };
  }

  render() {
    const { email, expenses } = this.props;
    const { currency } = this.state;

    return (
      <header>
        <p data-testid="email-field">{`email: ${email}`}</p>
        <div>
          <p data-testid="total-field">
            {`despesa total: ${expenses
              .reduce((acc, cV) => acc + cV.value * cV.exchangeRates[cV.currency].ask, 0)
              .toFixed(2)} `}
          </p>
          <p
            data-testid="header-currency-field"
          >
            cambio usado:
            <span id="currency_used">
              {currency}
            </span>
          </p>
        </div>
      </header>
    );
  }
}

const mapStateToProps = ({ user: { email }, wallet: { expenses } }) => ({
  email,
  expenses,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, null)(Header);
