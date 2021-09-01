import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { logedEmail } = this.props;

    return (
      <header className="header">
        <div>
          TRYBE
        </div>

        <div className="header-infos">
          <div>
            <strong>Email: </strong>
            <span data-testid="email-field">{ logedEmail }</span>
          </div>

          <div>
            <strong>Despesa Total: </strong>
            <span data-testid="total-field">0 </span>
            <span data-testid="header-currency-field">BRL</span>
          </div>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  logedEmail: state.user.email,
});

export default connect(mapStateToProps, null)(Header);
