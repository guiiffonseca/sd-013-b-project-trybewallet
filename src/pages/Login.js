import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  render() {
    return (
      <div className="login">
        <section className="emailInput">
          <input
            type="email"
            //  onChange={ handleChange }
            placeholder="email"
            data-testid="email-input"
          />
          <input
            type="text"
            //  onChange={ handleChange }
            placeholder="password"
            data-testid="password-input"
          />
        </section>
        <div className="link">
          <Link
            to="/wallet"
            //  onClick={ () => login({ user.email, user.password }) }
          >
            Entrar
          </Link>
        </div>
      </div>
    );
  }
}

export default Login;
