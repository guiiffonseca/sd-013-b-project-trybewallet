import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valueinitial: 0,
      coinInitial: 'BRL',
    };
  }

  render() {
    const { email, valueinitial, coinInitial } = this.state;
    return (
      <header>
        <div>
          <input
            type="text"
            name="name"
            value={ email }
            data-testid="email-field"
          />
          <input
            type="text"
            name="name"
            data-testid="total-field"
            value={ valueinitial }
          />
        </div>
        <input
          type="submit"
          value={ coinInitial }
          data-testid="header-currency-field"
        />
      </header>
    );
  }
}

const mapStateToProps = ({ user: { email } }) => ({
  email,
});

export default connect(null, mapStateToProps)(Header);
