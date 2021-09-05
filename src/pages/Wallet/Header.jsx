import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      currencies: 'BRL',
      expenses: 0,
    };
  }

  render() {
    const { currencies, expenses } = this.state;
    const { email } = this.props;
    return (
      <div className="wallet-header-content">
        <div>
          <span data-testid="email-field">{ email }</span>
        </div>

        <div>
          <span data-testid="total-field">{ expenses }</span>
        </div>

        <div>
          <span data-testid="header-currency-field">{ currencies }</span>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
};

const mapStateToProps = ({ user }) => ({
  email: user.email,
});

export default connect(mapStateToProps)(Header);
