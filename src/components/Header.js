import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { setEmail } = this.props;
    return (
      <header className="header">
        <div>
          <p data-testid="email-field">{ setEmail }</p>
        </div>
        <div>
          <span data-testid="total-field">0</span>
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
});

Header.propTypes = {
  setEmail: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(Header);
