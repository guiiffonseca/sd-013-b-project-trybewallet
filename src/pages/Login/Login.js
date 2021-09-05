import React from 'react';
// import { connect } from 'react-redux';
import LoginLeftContainer from './LoginLeftContainer';
import LoginRightContainer from './LoginRightContainer';
import './login.css';
// import { userEmail } from '../../actions';
// import { connect } from 'react-redux';

class Login extends React.Component {
  render() {
    return (
      <div className="login-page">
        <div className="login-header">
          <img src="https://web.mobills.com.br/static/media/logo.982a0821.svg" alt="logo Trybells" />
          <p>Trybells</p>
        </div>

        <div className="main-container">
          <LoginLeftContainer />
          <LoginRightContainer />
        </div>
      </div>
    );
  }
}

export default Login;

/*
Lembretes:
verificar quebra de linha do h1 e do p,
verificar img src no asset,
*/
