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
      <div>
        Welcome {UserEmail}
      </div>
    );
  }
}

const mapStateToProps = ({ user: { email } }) => ({
  UserEmail: email,

});

export default connect(mapStateToProps)(Header);
