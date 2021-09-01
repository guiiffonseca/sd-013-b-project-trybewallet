import React from 'react';
import { connect } from 'react-redux';
import { USER_INFO as USER_INFOACTION } from '../actions';

class Login extends React.Component {
  render() {
    return <div>Login</div>;
  }
}

const mapDispatchToProps = (dispatch) => ({
  USER_INFO: dispatch(USER_INFOACTION(payload))
});

export default connect(null, mapDispatchToProps)(Login);
