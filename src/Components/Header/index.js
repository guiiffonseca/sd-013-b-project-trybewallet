import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: props.user,
    };
  }

  render() {
    const { email } = this.state;
    return (
      <div className="header">
        <h1 data-testid="email-field">{ email }</h1>
        <h1 data-testid="total-field"> 0 </h1>
        <h1 data-testid="header-currency-field"> BRL</h1>

      </div>
    );
  }
}

const mapStateToProps = (dispatch) => ({
  user: dispatch.user.email,
});

Header.propTypes = {
  user: propTypes.string.isRequired,
};

export default connect(mapStateToProps)(Header);
