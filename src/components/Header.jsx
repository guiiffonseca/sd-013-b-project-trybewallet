import React from 'react';
import { connect } from 'react-redux';

export class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { UserEmail } = this.props;
    return (
      <header>
        <div data-testid="email-field">
          Welcome {UserEmail}
        </div>
        <div data-testid="total-field">
          Despesas: R$ 0
        </div>
        <div data-testid="header-currency-field">
          BRL
        </div>
      </header>
    );
  }
}

const mapStateToProps = ({ user: { email } }) => ({
  UserEmail: email,

});

export default connect(mapStateToProps)(Header);
