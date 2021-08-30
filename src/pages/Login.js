import React from 'react';
import { connect } from 'react-redux';

class Login extends React.Component {
  render() {
    return (
      <div>
        <form>
          <fieldset>
            <h1>TRYBE</h1>
            <label htmlFor="email">
              <input type="email" data-testid="email-input" placeholder="Email:" />
            </label>
            <label htmlFor="password">
              <input
                type="password"
                data-testid="password-input"
                minLength="6"
                placeholder="Password:"
              />
            </label>
            <button type="button">Entrar</button>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default connect()(Login);
