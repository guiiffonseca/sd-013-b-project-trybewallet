import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  constructor() {
    super();

    this.state = {
      totalExpenses: 0,
    };
  }

  render() {
    const { email } = this.props;
    const { totalExpenses } = this.state;
    const currencyField = 'BRL';
    return (
      <div>
        <span data-testid="email-field">
          { `Email: ${email}` }
        </span>
        <span data-testid="total-field">
          { `Despesa Total: R$${totalExpenses.toFixed(2)}` }
        </span>
        <span data-testid="header-currency-field">
          { currencyField }
        </span>
      </div>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps)(Header);
