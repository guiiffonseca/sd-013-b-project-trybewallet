import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currency: 'BRL',
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
            {`despesa total: ${expenses.reduce((acc, currVal) => acc + currVal.value * currVal.exchangeRates[0].ask, 0)} `}
          </p>
          <p
            data-testid="header-currency-field"
          >
            {`cambio usado:${currency}`}
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
};

export default connect(mapStateToProps, null)(Header);
