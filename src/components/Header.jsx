import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      currency: 'BRL',
    };
  }

  render() {
    const { total, currency } = this.state;
    const { email } = this.props;
    return (
      <div>
        <div data-testid="email-field">{ email }</div>
        <div data-testid="total-field">{ total.toFixed(2) }</div>
        <div data-testid="header-currency-field">{ `Câmbio: ${currency}` }</div>
      </div>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
};

const mapStateToProp = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProp)(Header);
