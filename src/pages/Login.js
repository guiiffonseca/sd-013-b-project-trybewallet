import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  render() {
    return (
      <div>
        <Link to="/wallet">back to wallet</Link>
        <div>
          TrybeWallet
          I AM LOGIN
        </div>
      </div>
    );
  }
}

export default Login;
