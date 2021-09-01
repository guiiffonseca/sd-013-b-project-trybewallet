import React from 'react';
import './login.css';

class SocialLogin extends React.Component {
  render() {
    return (
      <div className="social-login">
        <div className="google">
          <img src="https://web.mobills.com.br/static/media/google.091331fc.svg" alt="google logo" />
          <span>Google</span>
        </div>
        <div className="facebook">
          <img src="https://web.mobills.com.br/static/media/facebook.3dfe870e.svg" alt="facebook logo" />
          <span>Facebook</span>
        </div>
        <div className="apple">
          <img src="https://web.mobills.com.br/static/media/apple.c8b37e55.svg" alt="apple logo" />
          <span>Apple</span>
        </div>
      </div>

    );
  }
}

export default SocialLogin;
