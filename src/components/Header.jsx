import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { userLogin } from '../actions';

class Header extends React.Component {
  render() {
    const { email } = this.props;
    const currency = 'BRL';
    const expenses = 0;
    return (
      <header>
        <p data-testid="header-currency-field">
          {` Choosen Currency: ${currency}`}
        </p>
        <p data-testid="email-field">
          {` E-mail: ${email}`}
        </p>
        <p data-testid="total-field">
          {` Total Expenses: ${expenses}`}
        </p>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
});

const mapDispatchToProps = (dispatch) => ({
  saveLogin: (email) => dispatch(userLogin(email)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
